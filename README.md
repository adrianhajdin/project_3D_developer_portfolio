# 3dFolio

3D Developer PortFolio using React Three Fiber

### Things to Provide

* **public** 
  - desktop_pc model
  - planet model
  - logo
* **assets** - contains other icons and images of the application
* **index.css** - some gradient and loader styles including the links for font family
* **tailwind.config.cjs** - contains color, screen, boxShadow and backgroundImage configurations
* **style.js** - contains reusable style object 
* **utils/motion.js** - contains animations variants using Framer Motion
* **constants** - contains dummy data required for the application


### Setup

* Create react project using vite
  ```shell
  npm create vite@latest 3dFolio -- --template react
  ```
* Install [tailwind using PostCSS](https://tailwindcss.com/docs/installation/using-postcss)
* Download below packages for React Three Fiber setup
  ```shell
  npm i three @react-three/fiber @react-three/drei maath
  ```
  - [three](https://www.npmjs.com/package/three): 3D threejs library
  - [@react-three/fiber](https://www.npmjs.com/package/@react-three/fiber): React renderer for threejs library
  - [@react-three/drei](https://www.npmjs.com/package/@react-three/drei): Useful addons for react three fiber. Provides prebuilt components
  - [maath](https://github.com/pmndrs/maath): collection of useful math helpers, random generators, bits and bobs. Mostly meant to be used with three.js. We're using it for random star generation
* Additional packages
  - [react-tilt](https://www.npmjs.com/package/react-tilt): For the card hover effect. This uses older version of React.js. From here on we'll have to use
    ```shell
    npm i --legacy-peer-deps
    ```
    This will be the installation command for deployment as well
  - [react-vertical-timeline-component](https://www.npmjs.com/package/react-vertical-timeline-component): For work experience timeline
  - [@emailjs/browser](https://www.npmjs.com/package/@emailjs/browser) - Emailjs SDK
  - Other two are [framer-motion](https://www.npmjs.com/package/framer-motion) & [react-router-dom](https://www.npmjs.com/package/react-router-dom)


### Notes

* **desktop_pc model**
  - SketchFab - Download [GLTF file](https://sketchfab.com/3d-models/gaming-desktop-pc-d1d8282c9916438091f11aeb28787b66)
  - In the textures folder, we can replace any images with our own. We changed two images:
    - Material_baseColor.jpeg: We used Fabric Felt Texture from [here](https://www.textures.com/download/PBR0294/134376)
    - Material.074_30_baseColor.png
* **planet model**
  - SketchFab - Download [GLTF file](https://sketchfab.com/3d-models/stylized-planet-789725db86f547fc9163b00f302c3e70)
  - People can change the texture of the model by replacing images in textures folder with their own
* **hoc/SectionWrapper**
  - A HOC that will handle the layout of each section with animation and padding styles
* [matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)
  - Returns a new MediaQueryList object that can then be used to determine if the document matches the media query string
  - In the hero section, we utilize this to detect the device's screen size and subsequently render the canvas accordingly.
  - Read: [Why window.matchMedia is better than window.resize](https://webdevetc.com/blog/matchmedia-events-for-window-resizes/)
* Contact Form
  - Create a .env file and add these variables from Emailjs Dashboard
    ```bash
    VITE_APP_EMAILJS_PUBLIC_KEY=""
    VITE_APP_EMAILJS_SERVICE_ID=""
    VITE_APP_EMAILJS_TEMPLATE_ID=""
    ```
  - Do gitignore the env file
* Canvas Loader
  - To display a loading animation and the percentage of the progress of loading the 3D model.
  - **useProgress** hook get the progress of loading the 3D model
  - **HTML** component of drei allows you to tie HTML content to any object of your scene. It will be projected to the objects whereabouts automatically. [Read](https://github.com/pmndrs/drei#html)

### Canvas

  - **frameloop**: This prop sets the animation loop mode for the scene. The value 'demand' indicates that the loop will only run when necessary, based on changes to the scene.
  - **shadows**: This prop enables shadows in the scene.
  - **dpr**: This prop sets the device pixel ratio for the scene. The value [1, 2] indicates that the scene should be rendered at two different resolutions, depending on the device's pixel ratio.
  - **camera**: This prop sets the position and field of view (FOV) for the camera used to view the scene.
  - **gl**: This prop sets options for the WebGL renderer used to render the scene, including preserveDrawingBuffer, which ensures that the contents of the canvas can be saved as an image.
  - The **Suspense** component is used to handle asynchronous loading of resources, such as 3D models, textures, and shaders
  - The **fallback** prop sets the component to render while the resources are loading.
  - The **OrbitControls** component is a utility component that provides mouse and touch controls for navigating the 3D scene. 
  - **Preload** component preloads all resources used in the scene, including 3D models, textures, and shaders. This can help to ensure smooth performance during rendering by avoiding delays due to resource loading.
  - **useGLTF** is a hook to load 3D model from drei library
  - **primitive** renders the 3D model. Its props are:
    - object:  model scene
    - scale:  size of the model
    - position: determines position of the model
    - rotation: determines rotation of the model
    You can pass all positions as an array of points or by separately:
    ```javascript
    <primitive 
       position={[0,1,1]}
    />
    
    // or
    <primitive 
       position-y={1}
       position-z={1}
    />
    ```
    By default the position points to the origin i.e., [0,0,0]
  - **mesh**:  Represents a 3D geometery. You can use props such as position, rotation, and scale to transform the entire object as needed. 
  - There are several [types of lights available in Three.js](https://threejs.org/docs/#api/en/lights/AmbientLight):
    - **AmbientLight**: This type of light is used to create general illumination in a scene. It illuminates all objects in the scene equally and does not cast shadows.
    - **PointLight**: A point light illuminates objects from a single point in all directions. It can cast shadows and can be used to create a sense of volume and depth in a scene.
    - **DirectionalLight**: A directional light illuminates objects from a specific direction. It is similar to sunlight and can be used to create shadows that appear parallel.
    - **SpotLight**: A spot light illuminates objects within a cone-shaped area. It can be used to create a spotlight effect and can cast shadows.
    - **HemisphereLight**: A hemisphere light illuminates objects with different colors from two opposite directions. 
    

#### Ball Canvas

Canvas created for tech section

* **Float**: Applies floating animation to the 3D object
* **castShadow** and **receiveShadow** enable the sphere to both cast and receive shadows
* **icosahedronGeometry** component is used to define the shape of the sphere. One of the geometry of three.js. Check all possible geometry shapes [here](https://threejs.org/docs/#api/en/geometries/BoxGeometry)
* **meshStandardMaterial** component is used to apply a standard material to the sphere. A flat shading effect means that the surface of the sphere appears smooth and not curved.
* **Decal**: A special type of texture that can be applied to a 3D mesh to create the appearance of a sticker or decal on its surface. 
* **useTexture**: A hook that allows you to load one or more textures

#### Stars Canvas

Contact section stars

* state contains a 5000 element Float32Array of random points that lie within a sphere with a radius of 1.2:
  ```javascript
  const [sphere] = useState(() =>
     random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );
  ```
* **useFrame** hook updates the rotation of the ref.current object on every frame
  ```javascript
  useFrame((state, delta) => {
     ref.current.rotation.x -= delta / 10;
     ref.current.rotation.y -= delta / 15;
  });
  ```
* **group**: Allows multiple 3D objects to be grouped together and transformed as a single unit
* **Points**: Renders a set of points in 3D space
  -  **stride**: specifies the number of values in the positions array that make up a single point. For ex., stride(3) means each point is defined by three values (x, y, and z)
  - **frustumCulled**: frustum culling is a technique used to improve rendering performance by not rendering objects that are outside of the camera's view frustum.
* **PointMaterial**: sets the material properties for each point rendered by the Points component
  - **sizeAttenuation**: Size attenuation causes points that are farther away from the camera to appear smaller.
  - **depthWrite**: Depth writing determines whether or not the rendered points will write to the depth buffer, which affects the rendering order of objects in 3D space.
  
  
