import React from 'react'
import styles from '../styles/sass/_Login.module.scss'
import Img from '../public/assets/logo.svg';

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
          <Img />
      </div>
      <div className={styles.card}>
          <div className={styles.main}>
            <div className={styles.title}>Login</div>
            <input className={styles.inpt} placeholder='Email address'/>
            <input className={styles.inpt} placeholder='password' type='password'/>
            <button className={styles.btn}>Login to your account</button>
          </div>
          <div className={styles.btm}>
              <div className={styles.act}> Dont have an account ?</div>
              <div className={styles.sgn}>Sign Up</div>
          </div>
      </div>
  </div>
  )
}

export default Login