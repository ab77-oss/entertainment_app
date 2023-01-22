import React from 'react'
import styles from '../styles/sass/_SignUp.module.scss'
import Img from '../public/assets/logo.svg';

function SignUp() {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
          <Img />
      </div>
      <div className={styles.card}>
          <div className={styles.main}>
            <div className={styles.title}>Sign Up</div>
            <input className={styles.inpt} placeholder='Email address'/>
            <input className={styles.inpt} placeholder='password' type='password'/>
            <input className={styles.inpt} placeholder='Repeat password' type='password'/>
            <button className={styles.btn}>Create an account</button>
          </div>
          <div className={styles.btm}>
              <div className={styles.act}> Already have an account ?</div>
              <div className={styles.sgn}>Login</div>
          </div>
      </div>
  </div>
  )
}

export default SignUp