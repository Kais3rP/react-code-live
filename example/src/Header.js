import React, { useEffect, useRef } from 'react'
import { TimelineMax } from "gsap"
import styles from './styles.module.css'

const Header = () => {

    const containerRef = useRef(null)
    const jsRef = useRef(null)
    const cssRef = useRef(null)

useEffect(() => {
    const animation = new TimelineMax({repeat: -1})
    animation/* .to(containerRef.current, {duration: 1, transform: "rotate(30deg)", ease: "bounce"}) */
    .to(containerRef.current, {duration: 1, delay:4, transform: "rotateX(90deg)", ease: "bounce"})
    .to(containerRef.current, {duration: 1.5, transform: "rotateX(0deg)", ease: "power3.out"})
    /* .to(containerRef.current, {duration: 1, transform: "rotateZ(45deg)", ease: "bounce"}) */
    const jsAnim = new TimelineMax({repeat: -1, yoyo:true})
    jsAnim.to([jsRef.current, cssRef.current], { duration: 1.25, width: "100%"})
    jsAnim.play()
animation.play()
},[])

  return (
    <div ref={containerRef} className={styles.header_container}>
      <div className={styles.logo}>
        <h4>React Code Live</h4>
        <div className={styles.left}><h5>JS and JSX SUPPORT!</h5><span ref={jsRef} className={styles.line}></span></div>
        <div className={styles.right}><h5>SCOPED CSS!</h5><span ref={cssRef} className={styles.line}></span></div>
      </div>
    </div>
  )
}

export default Header
