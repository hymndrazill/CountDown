import React, { Fragment}from 'react'
import './Clock.css'
const Clock = ({Days, Hours, Minutes, Seconds }) => {
  return (
    <Fragment>
        <section className="timeContainer">
            <section className="time">
                <div className="Clock">
                    <section>
                        <p> {Days}</p>
                        <small>Days</small>
                    </section>
                    <span>:</span>

                    <section>
                        <p> {Hours}</p>
                        <small>Hours</small>
                    </section>
                    <span>:</span>
                    <section>
                        <p> {Minutes}</p>
                        <small>Minutes</small>
                    </section>
                    <span>:</span>

                    <section>
                        <p> {Seconds}</p>
                        <small>Seconds</small>
                    </section>
                </div>
            </section> 
        </section>
      
    </Fragment>
  )
}

export default Clock
