


## Getting the position of the mouse
```js
  const orbitControlsRef = useRef(null);

  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(45));
      orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30));
      orbitControlsRef.current.update();
    }
  });
  useEffect(() => {}, [orbitControlsRef.current]);

<PerspectiveCamera makeDefault position={[0, 1, 5]} />
<OrbitControls ref={orbitControlsRef} />
<mesh >...</mesh>
```
![screenshot](public/screenshots/screen.gif)  