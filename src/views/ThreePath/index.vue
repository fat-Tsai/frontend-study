<template>
  <div class="three-path">
    <div ref="canvasContainer" class="canvas-container"></div>
    <div class="controls">
      <button @click="startDrawing" :disabled="isDrawing">开始绘制</button>
      <button @click="stopDrawing" :disabled="!isDrawing">停止绘制</button>
      <button @click="clearDrawing">清除</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { PathPointList } from './PathPointList.js'
import { PathTubeGeometry } from './PathTubeGeometry.js'

const canvasContainer = ref<HTMLElement | null>(null)
const isDrawing = ref(false)
const points: THREE.Vector3[] = []
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let pathPointList: PathPointList
let tubeGeometry: PathTubeGeometry
let tubeMesh: THREE.Mesh | undefined
let raycaster: THREE.Raycaster
let mouse: THREE.Vector2
let plane: THREE.Plane
let planeIntersectPoint: THREE.Vector3
let controls: OrbitControls

const initThree = () => {
  // 创建场景
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0xf0f0f0)

  // 创建相机
  camera = new THREE.PerspectiveCamera(
    60,
    canvasContainer.value!.clientWidth / canvasContainer.value!.clientHeight,
    0.1,
    1000
  )
  camera.position.set(0, 0, 8)
  camera.lookAt(0, 0, 0);

  // 创建渲染器
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(canvasContainer.value!.clientWidth, canvasContainer.value!.clientHeight)
  canvasContainer.value!.appendChild(renderer.domElement)

  // 添加光源
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
  scene.add(ambientLight)

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
  directionalLight.position.set(1, 1, 1)
  scene.add(directionalLight)

  // 添加网格辅助线（坐标平面）
  const gridHelper = new THREE.GridHelper(15, 15, 0x888888, 0xcccccc)
  gridHelper.rotation.x = Math.PI / 2
  scene.add(gridHelper)

  // 添加坐标轴辅助线（红色X轴，绿色Y轴，蓝色Z轴）
  // const axesHelper = new THREE.AxesHelper(5)
  // scene.add(axesHelper)

  // 初始化轨道控制器（场景旋转）
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.05
  controls.enableZoom = true
  controls.enablePan = true

  // 初始化射线投射器和鼠标向量
  raycaster = new THREE.Raycaster()
  mouse = new THREE.Vector2()

  // 创建一个平面，用于鼠标拾取
  plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)
  planeIntersectPoint = new THREE.Vector3()

  // 初始化路径点列表和管道几何体
  pathPointList = new PathPointList()
  tubeGeometry = new PathTubeGeometry()

  // 动画循环
  const animate = () => {
    requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
  }
  animate()
}

const handleMouseDown = (event: MouseEvent) => {
  if (!isDrawing.value) return

  updateMousePosition(event)
  if (raycaster.ray.intersectPlane(plane, planeIntersectPoint)) {
    points.push(new THREE.Vector3(planeIntersectPoint.x, planeIntersectPoint.y, 0))
    updatePath()
  }
}

const handleMouseMove = (event: MouseEvent) => {
  if (!isDrawing.value) return

  updateMousePosition(event)
  if (raycaster.ray.intersectPlane(plane, planeIntersectPoint)) {
    if (points.length > 0) {
      points[points.length - 1] = new THREE.Vector3(planeIntersectPoint.x, planeIntersectPoint.y, 0)
      updatePath()
    }
  }
}

const updateMousePosition = (event: MouseEvent) => {
  if (!canvasContainer.value) return

  const rect = canvasContainer.value.getBoundingClientRect()
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

  raycaster.setFromCamera(mouse, camera)
}

const updatePath = () => {
  if (points.length < 2) return

  // 清除之前的管道
  if (tubeMesh) {
    scene.remove(tubeMesh)
  }

  // 更新路径点列表
  pathPointList.set(points, 0.1, 10, null, false)

  // 创建新的管道
  const material = new THREE.MeshStandardMaterial({ color: 0x42b983 })
  tubeMesh = new THREE.Mesh(tubeGeometry, material)
  tubeGeometry.update(pathPointList, {
    radius: 0.05,
    radialSegments: 32
  })

  scene.add(tubeMesh)
}

const startDrawing = () => {
  isDrawing.value = true
  points.length = 0
}

const stopDrawing = () => {
  isDrawing.value = false
}

const clearDrawing = () => {
  points.length = 0
  if (tubeMesh) {
    scene.remove(tubeMesh)
    tubeMesh = undefined
  }
}

const handleResize = () => {
  if (!canvasContainer.value) return

  camera.aspect = canvasContainer.value.clientWidth / canvasContainer.value.clientHeight
  camera.updateProjectionMatrix()
  renderer.setSize(canvasContainer.value.clientWidth, canvasContainer.value.clientHeight)
}

onMounted(() => {
  initThree()
  window.addEventListener('mousedown', handleMouseDown)
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('mousedown', handleMouseDown)
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('resize', handleResize)
  if (canvasContainer.value) {
    canvasContainer.value.removeChild(renderer.domElement)
  }
})
</script>

<style lang="scss">
.three-path {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.canvas-container {
  flex: 1;
  width: 100%;
  height: 100%;
  position: relative;
}

.controls {
  padding: 10px;
  background-color: #f5f5f5;
  border-top: 1px solid #e0e0e0;
  display: flex;
  gap: 10px;
}

button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #42b983;
  color: white;
  cursor: pointer;
  font-size: 14px;
}

button:hover {
  background-color: #35495e;
}

button:disabled {
  background-color: #95a5a6;
  cursor: not-allowed;
}
</style>