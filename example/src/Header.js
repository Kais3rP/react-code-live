import React, { useEffect, useRef } from 'react'
import mouse from './assets/mouse.svg'
import { TimelineMax } from 'gsap'
import styles from './styles.module.css'

const Header = () => {
  const containerRef = useRef(null)
  const jsRef = useRef(null)
  const cssRef = useRef(null)
  const reactRef = useRef(null)
  const codeRef = useRef(null)
  const liveRef = useRef(null)
  const logoRef = useRef(null)
  const mouseRef = useRef(null)

  useEffect(() => {
    const animation = new TimelineMax({ repeat: 0 })

    animation
      .set(logoRef.current, { rotationX: 90 })
      .set([reactRef.current, codeRef.current, liveRef.current], {
        x: 200,
        visibility: 'hidden',
      })
      .to(logoRef.current, {
        duration: 0.7,
        rotationX: 0,
        boxShadow: '-100px 100px 10px 10px #070129',
        ease: 'bounce',
        delay: 1,
      })
      /* .to(logoRef.current, { duration: 0.2, boxShadow:'-100px 100px 10px 10px #070129' }) */
      .to([reactRef.current, codeRef.current, liveRef.current], {
        duration: 0.5,
        x: 0,
        visibility: 'visible',
        stagger: 0.3,
      })

    const textAnim = new TimelineMax({
      repeat: -1,
      repeatRefresh: true,
      delay: 1.2,
      yoyo: true,
    })

    textAnim.to([reactRef.current, codeRef.current, liveRef.current], {
      duration: 1,
      color: '#CCC',
      ease: 'Power3.out',
      stagger: 0.1,
    })

    const sideAnim = new TimelineMax({ repeat: -1, yoyo: true })

    sideAnim
      .to(cssRef.current, {
        duration: 1.2,
        width: '100%',
      })
      .to(jsRef.current, {
        duration: 1.2,
        width: '100%',
      })

    /* const shaking = new TimelineMax({repeat: -1, yoyo: true, delay: 3})
    .to(logoRef.current, { duration:0.1, delay:2.5, rotation:"+=5" })
    .to(logoRef.current, { duration:0.1, rotation:"-=5" }) */
    const mouseAnim = new TimelineMax({ repeat: -1, yoyo: true })
    mouseAnim.to(mouseRef.current, { duration: 0.5, opacity: 0.2, y: '-=5px' })
  }, [])

  return (
    <div ref={containerRef} className={styles.header_container}>
      <h1>React Code Live</h1>
      <a
        href='https://github.com/Kais3rP/react-code-live'
        target={'_blank'}
        rel='noopener noreferrer'
      >
        <div ref={logoRef} className={styles.logo}>
          <div className={styles.title}>
            <h4 ref={reactRef}>
              <u>React</u>
            </h4>
            <h4 ref={codeRef}>
              <u>Code</u>
            </h4>
            <h4 ref={liveRef}>
              <u>Live</u>
            </h4>
          </div>
          <div className={styles.left}>
            <h5 className={styles.sideTitles}>JS AND JSX SUPPORT!</h5>
            <span ref={jsRef} className={styles.line}></span>
          </div>
          <div className={styles.right}>
            <h5 className={styles.sideTitles}>SCOPED CSS!</h5>
            <span ref={cssRef} className={styles.line}></span>
          </div>
        </div>
      </a>
      <a
        href='https://github.com/Kais3rP/react-code-live'
        target={'_blank'}
        rel='noopener noreferrer'
      >
        <div className={styles.github}>
          <i className='fab fa-github-square'></i>
          <h4>GitHub Repo</h4>
        </div>
      </a>
      <div className={styles.scroll}>
        <img
          ref={mouseRef}
          className={styles.mouse}
          src={mouse}
          alt='Scroll Icon'
        />
      </div>
    </div>
  )
}

export default Header
