import React, { Suspense, useCallback, useMemo } from "react";

//styles
import './styles.css';

//redux
import { useDispatch, useSelector } from "react-redux";
import { setAccessWithoutLogin, setLoginSignupComponentVisibility } from "../../redux/actions/actions";
import LoginSignupComponent from "../LoginSignup/LoginSignupComponent";

//Three
import * as THREE from 'three';
import { Canvas, useLoader } from 'react-three-fiber';
import CircleImg from './../../assets/circle.png';

function Points() {
  const imgTex = useLoader(THREE.TextureLoader, CircleImg);
  const count = 100;
  const sep = 3;
  let positions = useMemo(() => {
    let positions = []
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);
        let y = 0;
        positions.push(x, y, z);
      }
    }
    return new Float32Array(positions);
  }, [count, sep] )
  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attachObject={['attributes', 'position']}
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        attach="material"
        map={imgTex}
        color={0x00AAFF}
        size={0.5}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}
      />
    </points>
  )
}

function AnimationCanvas() {
  return (
    <Canvas
      colorManagement={false}
      camera={{ position: [100, 10, 0], fov: 75 }}>
      <Suspense fallback={null}>
        <Points />
      </Suspense>

    </Canvas>
  )

}

function LoadingComponent() {
  const isLoginSignupComponentVisible = useSelector(state => state.isLoginSignupComponentVisible);
  const dispatch = useDispatch();

  function loadMainComponent_WithoutLogin() {
    setTimeout(() => {
      dispatch(setAccessWithoutLogin(true))
    }, 150)
  }

  return (
    <div className="Loading">
      <div className="Loading_inner">
        <div className='anim'>
          <Suspense fallback={<div>Loading</div>}>
            <AnimationCanvas />
          </Suspense>
        </div>

        <h1 >Crack Off Campus</h1>
        <button id="btn_Continue" onClick={loadMainComponent_WithoutLogin}>Continue Without Login</button>
        <button id="btn_Login" onClick={() => { dispatch(setLoginSignupComponentVisibility(true)) }} >Login</button>
        {isLoginSignupComponentVisible == true ?
          (
            <LoginSignupComponent />
          )
          : null
        }
      </div>
    </div>
  )
}
export default LoadingComponent;