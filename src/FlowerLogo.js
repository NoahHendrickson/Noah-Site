import React from 'react'
import FlowerLogoStyles from './FlowerLogo.css'

const FlowerLogo = () => {
  return (
    <div className="button_container flower__container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-110 -100 1200 1200"
      >
      
        <defs>
          <g id="petal">
            <path
              className="d middle one-middle"
              d="M555.32,239.2c-8.93,3.77-19.64,8.86-31.01,15.32-2.34,1.31-4.7,2.7-7.08,4.18-1.69,1-3.41,2.08-5.11,3.18-.51,.31-1,.62-1.49,.95-2.16,1.41-4.34,2.85-6.49,4.36-7.98,5.54-15.97,11.78-23.56,18.76-7.83-7.21-16.09-13.6-24.33-19.3-2.18-1.49-4.34-2.95-6.52-4.34-.23-.15-.46-.31-.69-.44-1.98-1.28-3.95-2.52-5.9-3.7-2.75-1.64-5.44-3.21-8.11-4.7-11.09-6.21-21.48-11.06-30.13-14.71,.92-8.14,2.64-16.07,4.98-23.77,.95-3.21,2.03-6.39,3.18-9.5,1.16-3.11,2.39-6.13,3.72-9.14,4.49-10.19,9.86-19.82,15.58-28.7,1.49-2.31,3-4.57,4.54-6.8,1.54-2.21,3.08-4.36,4.62-6.47,15.25-20.59,31.03-35.7,38.55-42.45,7.52,6.72,23.28,21.79,38.48,42.33,1.57,2.1,3.13,4.26,4.65,6.47,1.57,2.21,3.08,4.49,4.57,6.8,5.75,8.91,11.14,18.56,15.66,28.8,1.31,2.98,2.54,6.03,3.7,9.11,1.16,3.11,2.23,6.29,3.18,9.5,2.39,7.83,4.13,15.94,5.03,24.23Z"
            />
          </g>
        </defs>
        <g id="a">
          <g id="face">
            <path
              className="d face"
              d="M608.02,479.22v-.08c-.05-5.9-.51-11.68-1.36-17.35-.54-3.7-1.26-7.34-2.13-10.91v-.05c-.08-.33-.15-.67-.23-.98-.33-1.36-.69-2.67-1.08-4-.28-1.05-.59-2.08-.92-3.13-.03-.13-.08-.23-.1-.36-.77-2.41-1.59-4.8-2.49-7.14-.08-.21-.15-.41-.23-.59-.62-1.59-1.26-3.16-1.93-4.7v-.03c-.05-.08-.08-.18-.13-.26-1-2.31-2.08-4.59-3.23-6.85-.1-.21-.23-.41-.33-.64-1.28-2.49-2.67-4.95-4.13-7.37-2.67-4.39-5.57-8.62-8.73-12.65-1.69-2.16-3.47-4.29-5.29-6.31-1.87-2.1-3.82-4.16-5.85-6.13-3.44-3.39-7.06-6.57-10.86-9.55-.9-.69-1.8-1.39-2.72-2.05-.39-.28-.74-.56-1.13-.82-.36-.28-.74-.54-1.1-.8-1.51-1.08-3.03-2.1-4.59-3.11-.46-.31-.92-.59-1.39-.87-.31-.21-.62-.41-.95-.62h-.03c-1.39-.85-2.77-1.67-4.21-2.46-.13-.1-.28-.18-.44-.26-.87-.49-1.77-.98-2.67-1.44-1.21-.64-2.44-1.28-3.7-1.9-1.31-.62-2.64-1.23-4-1.85-1.44-.64-2.9-1.23-4.36-1.82-.23-.1-.46-.21-.72-.28-2.08-.82-4.18-1.59-6.34-2.28-.59-.21-1.18-.41-1.77-.59-1.85-.59-3.72-1.13-5.62-1.62-.85-.23-1.67-.46-2.52-.64-7.6-1.87-15.48-3.03-23.56-3.47-2.18-.1-4.39-.15-6.6-.15-.38,0-.8,0-1.18,.03h-.03c-6.16,.03-12.19,.54-18.12,1.44-3.67,.56-7.29,1.28-10.83,2.16-1.13,.26-2.23,.54-3.34,.87-.64,.15-1.31,.33-1.95,.54-.95,.26-1.9,.54-2.85,.85-.87,.28-1.72,.54-2.57,.82-1.87,.64-3.72,1.33-5.54,2.05-.51,.18-1,.39-1.49,.59-1.21,.49-2.41,1-3.59,1.51-.9,.41-1.8,.82-2.7,1.23-1.69,.8-3.36,1.64-5.01,2.52-.62,.31-1.21,.64-1.8,.95-1.87,1.03-3.72,2.1-5.54,3.21-2.23,1.39-4.41,2.82-6.55,4.31-4.31,3.03-8.42,6.29-12.29,9.81-2.08,1.9-4.11,3.85-6.06,5.85-4.16,4.29-8.01,8.86-11.52,13.68-.46,.62-.92,1.23-1.36,1.87,0,0,0,.03-.03,.03-1.67,2.39-3.29,4.85-4.8,7.37-.9,1.49-1.77,3-2.62,4.54v.03c-.51,.95-1.03,1.85-1.51,2.8-.08,.18-.18,.33-.26,.49-1.16,2.26-2.23,4.54-3.26,6.85-.05,.13-.1,.28-.18,.41v.03c-.64,1.46-1.23,2.9-1.8,4.39-.05,.1-.1,.21-.13,.31-.87,2.23-1.67,4.49-2.41,6.78v.03c-.15,.44-.28,.85-.41,1.28-.64,2.03-1.21,4.06-1.75,6.13-.18,.64-.33,1.31-.49,1.98v.05c-1.8,7.39-2.93,15.04-3.34,22.9v.05c-.13,2.21-.18,4.47-.18,6.75,0,.85,0,1.67,.05,2.52v.03c.08,5.88,.62,11.68,1.49,17.35,.59,3.72,1.33,7.39,2.26,11.01,.18,.77,.39,1.54,.62,2.28v.03c.21,.85,.44,1.64,.69,2.46v.03c.31,1.13,.64,2.23,1,3.34,.18,.51,.33,1.03,.51,1.57,.74,2.18,1.54,4.36,2.41,6.52,.05,.18,.13,.36,.21,.54,.49,1.23,1,2.44,1.54,3.64,0,.03,.03,.05,.03,.08,.33,.74,.67,1.49,1.03,2.23,.85,1.82,1.72,3.59,2.64,5.36v.03s0,.03,.03,.03c.23,.49,.49,.92,.74,1.41,0,0,0,.03,.03,.03,1.08,1.98,2.18,3.9,3.36,5.83,.03,.03,.03,.05,.05,.05,4.67,7.73,10.22,14.89,16.4,21.41,.03,.05,.08,.1,.13,.15l.03,.03c1.41,1.46,2.85,2.9,4.31,4.31,.08,.08,.15,.13,.21,.21,0,0,.03,0,.03,.03,.05,.03,.1,.08,.15,.13,3.93,3.72,8.11,7.19,12.47,10.4,3.03,2.21,6.16,4.31,9.39,6.24,.03,.03,.05,.03,.08,.05,1.28,.8,2.64,1.54,3.98,2.31,.03,0,.03,.03,.05,.03,.26,.15,.51,.28,.8,.44,0,.03,.03,.03,.03,.03,.82,.44,1.62,.87,2.46,1.28,0,.03,.03,.03,.03,.03,1.44,.74,2.87,1.44,4.34,2.1,0,.03,.03,.03,.03,.03,1.08,.54,2.18,1,3.31,1.49,.03,0,.05,.03,.08,.03,1.26,.56,2.54,1.1,3.82,1.59,.18,.08,.39,.15,.59,.23h.03c2.31,.92,4.67,1.77,7.08,2.52,.1,.05,.23,.1,.36,.13,2.31,.74,4.67,1.41,7.06,2.03h.03c.33,.1,.67,.18,1.03,.26h.05c7.26,1.8,14.81,2.98,22.51,3.44,2.62,.18,5.26,.26,7.93,.26,.85,0,1.67,0,2.52-.05h.03c5.72-.08,11.32-.56,16.84-1.41,3.77-.59,7.44-1.33,11.06-2.23h.05c1.39-.33,2.77-.69,4.13-1.1,.1-.03,.23-.05,.33-.1h.05c1.21-.33,2.41-.69,3.59-1.08,1.13-.36,2.23-.72,3.34-1.1h.03c1.59-.56,3.13-1.16,4.7-1.77,.77-.28,1.54-.59,2.28-.92,.51-.21,1.03-.44,1.54-.67,.03,0,.05-.03,.08-.03,1.57-.67,3.13-1.36,4.65-2.1,1.03-.51,2.03-1,3.03-1.51,0,0,.03,0,.03-.03,1.28-.64,2.52-1.33,3.77-2.03,1.21-.67,2.39-1.36,3.54-2.05,.03-.03,.05-.03,.08-.05,6.57-3.93,12.73-8.47,18.43-13.48l.03-.03c2.57-2.28,5.03-4.62,7.42-7.08,3.93-4.08,7.6-8.39,10.99-12.96,0,0,0-.03,.03-.03,2.21-3,4.31-6.11,6.24-9.32,.03,0,.05-.03,.05-.05,.85-1.36,1.64-2.72,2.41-4.11,.03,0,.03-.03,.03-.03,.33-.62,.67-1.21,1-1.82v-.03c.26-.44,.49-.85,.72-1.28v-.05c.95-1.82,1.85-3.62,2.7-5.49,.03,0,.03-.03,.03-.03,.33-.69,.62-1.39,.95-2.08,0-.03,.03-.05,.03-.08,.44-1,.87-2,1.28-3v-.03c.15-.38,.33-.77,.46-1.15,.8-1.95,1.51-3.88,2.18-5.85v-.03c.26-.74,.51-1.46,.74-2.21,.54-1.69,1.05-3.41,1.51-5.13,.28-.98,.56-2,.8-3,1.87-7.42,3.05-15.09,3.54-22.95v-.03c.18-2.59,.26-5.26,.26-7.93,0-.46,0-.92-.03-1.36Zm-190.46-5.11c-.28,.28-.59,.49-.87,.72-1.44,1.08-3.16,1.72-4.98,1.72-2.21,0-4.29-.87-5.85-2.44s-2.44-3.64-2.44-5.85c0-.18,.05-.36,.05-.54,.08-.95,.26-1.85,.62-2.7,.41-.98,1-1.85,1.77-2.62l2.87-2.87,2.95-2.98,8.24-8.24,1.51-1.49-.59-.59-7.98-7.98-7.01-7.01c-.18-.18-.31-.36-.44-.54-2.75-3.26-2.64-8.11,.44-11.17,1.57-1.57,3.64-2.44,5.85-2.44s4.29,.87,5.85,2.44l15.58,15.58,.05-.05,1.33-1.36,4.9-4.88,6.39-6.39,.74-.74,2.16-2.16c3.23-3.23,8.47-3.23,11.7,0,.1,.08,.15,.18,.23,.26,2.98,3.26,2.93,8.29-.23,11.45l-15.58,15.58,4.62,4.59,2.39,2.39,8.57,8.6c.98,.98,1.64,2.16,2.03,3.44v.03c.26,.77,.41,1.57,.41,2.39,0,1.77-.59,3.44-1.62,4.85-.26,.36-.51,.69-.82,1-1.57,1.57-3.64,2.44-5.85,2.44s-4.29-.87-5.85-2.44l-15.58-15.58-15.58,15.58Zm120.23,51.41c0,.39-.03,.74-.03,1.13s-.03,.8-.03,1.18c0,.28-.03,.54-.05,.82,0,.21-.03,.41-.05,.62,0,.28-.03,.56-.05,.85-.51,6.39-2.08,12.47-4.52,18.07-.69,1.54-1.41,3.05-2.21,4.52-.36,.64-.72,1.26-1.08,1.9-1.28,2.1-2.67,4.11-4.18,6.03-.54,.67-1.08,1.31-1.62,1.95-2,2.31-4.18,4.47-6.55,6.44-.26,.21-.51,.41-.77,.64-1.64,1.31-3.34,2.52-5.11,3.67-2.1,1.33-4.29,2.52-6.55,3.59-.46,.21-.92,.41-1.39,.62-4,1.75-8.24,3-12.65,3.8-3.21,.56-6.52,.87-9.88,.87-1.36,0-2.7-.08-4.03-.15-2.82-.21-5.57-.62-8.26-1.21-3.05-.67-6.03-1.59-8.91-2.75-1.15-.46-2.31-.98-3.41-1.51-2.23-1.08-4.39-2.31-6.47-3.67-1.93-1.26-3.77-2.64-5.52-4.13-.1-.08-.21-.15-.31-.26-2.54-2.16-4.88-4.57-7.01-7.16-2.62-3.18-4.88-6.7-6.75-10.42-3.23-6.39-5.26-13.48-5.85-20.97-.1-1.49-.18-2.98-.18-4.47v-23h113.4v23Zm17.51-51.41c-1.57,1.57-3.64,2.44-5.85,2.44-1.82,0-3.54-.64-4.98-1.72-.28-.23-.59-.44-.87-.72l-15.58-15.58-15.58,15.58c-1.57,1.57-3.64,2.44-5.85,2.44s-4.29-.87-5.85-2.44c-.31-.31-.56-.64-.82-1-1.03-1.41-1.62-3.08-1.62-4.85,0-.82,.18-1.62,.41-2.39v-.03c.38-1.28,1.05-2.46,2.03-3.44l8.57-8.57,2.39-2.41,4.62-4.59-3.11-3.13-1.21-1.18-11.27-11.27c-3.16-3.16-3.21-8.19-.23-11.45,.08-.08,.15-.18,.23-.26,3.23-3.23,8.47-3.23,11.7,0l.95,.95,1.95,1.93,6.39,6.39,4.9,4.9,1.33,1.33,.05,.08,15.58-15.58c1.57-1.57,3.64-2.44,5.85-2.44,.98,0,1.9,.18,2.77,.51,1.13,.39,2.21,1.03,3.08,1.93,1.16,1.13,1.87,2.57,2.21,4.03,.56,2.46-.05,5.11-1.77,7.14-.13,.18-.26,.36-.44,.54l-1.64,1.64-5.36,5.36-7.88,7.88-.69,.69,15.58,15.58c.77,.77,1.36,1.64,1.77,2.62,.44,1,.67,2.1,.67,3.23,0,2.21-.87,4.29-2.44,5.85Z"
            />
          </g>

          <g>
            <path
              className="d middle eight-middle"
              d="M362.02,257.99c-3.44,8.6-7.16,19.1-10.47,30.9-.77,2.82-1.54,5.72-2.26,8.68-.51,2.13-1.03,4.31-1.49,6.49-.08,.38-.18,.74-.26,1.1-.51,2.52-1.03,5.06-1.49,7.65-1.77,9.68-3.03,19.87-3.47,30.31-10.47,.44-20.69,1.69-30.44,3.49-2.57,.46-5.13,.98-7.65,1.51-.33,.05-.64,.13-.98,.21-2.23,.49-4.44,1-6.62,1.51-3.11,.77-6.13,1.57-9.09,2.39h-.03c-13.14,3.7-24.64,7.93-33.68,11.68-5.9-6.96-10.91-14.48-15.17-22.33-1.64-3.03-3.18-6.08-4.62-9.19v-.03c-1.41-3.08-2.72-6.16-3.93-9.27v-.03c-4.03-10.27-7.03-20.71-9.27-30.93-.56-2.64-1.1-5.29-1.59-7.88-.46-2.62-.9-5.21-1.28-7.75-3.95-25.74-3.49-48.02-2.93-58.24,10.58-.59,34.09-1.1,60.99,3.31,2.57,.41,5.18,.87,7.83,1.41,2.67,.51,5.36,1.08,8.06,1.72,10.5,2.44,21.23,5.72,31.67,10.11,3.11,1.28,6.19,2.67,9.21,4.18,3.11,1.51,6.16,3.13,9.14,4.9v.03c6.96,4,13.6,8.65,19.79,14.04Z"
            />
            <path
              className="d middle three-middle"
              d="M850.35,482.5c-6.6,7.34-21.15,22.61-41.04,37.53-2.03,1.54-4.16,3.05-6.31,4.57-2.16,1.54-4.39,3.05-6.67,4.57-8.7,5.7-18.15,11.09-28.16,15.66-3,1.36-6.03,2.67-9.11,3.85-3.13,1.23-6.31,2.34-9.52,3.36-8.47,2.7-17.25,4.67-26.23,5.67-3.9-9.34-9.27-20.84-16.25-33.06-1.39-2.46-2.85-4.95-4.39-7.44-1.08-1.77-2.21-3.54-3.36-5.34-.28-.41-.54-.85-.8-1.26-1.41-2.16-2.87-4.34-4.39-6.49-5.44-7.8-11.58-15.58-18.38-23,7.32-7.96,13.81-16.32,19.56-24.72,1.39-2,2.72-4,4-6.01,.1-.18,.23-.33,.33-.49,1.41-2.23,2.77-4.41,4.11-6.62,1.9-3.16,3.72-6.31,5.42-9.39v-.03c5.36-9.73,9.68-18.87,13.04-26.72,7.29,.77,14.43,2.18,21.41,4.08,3.26,.9,6.49,1.9,9.7,3,3.13,1.08,6.24,2.28,9.29,3.54,10.42,4.34,20.28,9.63,29.39,15.32,2.36,1.49,4.67,3,6.96,4.52,2.26,1.54,4.44,3.08,6.6,4.62,21.79,15.76,37.81,32.47,44.82,40.27Z"
            />
            <path
              className="d middle two-middle"
              d="M747.58,232.83c0,1.75-.03,3.57-.05,5.49-.1,5.03-.33,10.6-.77,16.58v.05c-.46,6.31-1.18,13.09-2.23,20.15-.36,2.52-.77,5.08-1.23,7.67-.46,2.59-.98,5.18-1.54,7.83v.03c-2.13,10.06-5.01,20.38-8.86,30.52-1.18,3.16-2.46,6.26-3.85,9.37-.03,0-.03,.03-.03,.03-1.39,3.13-2.87,6.24-4.49,9.29-4.57,8.62-9.98,16.92-16.48,24.49-9.65-4.03-22.25-8.7-36.76-12.65h-.03c-2.57-.69-5.21-1.39-7.91-2.03-1.87-.46-3.8-.9-5.72-1.31-.64-.15-1.26-.28-1.9-.41-2.52-.54-5.08-1.03-7.67-1.49-9.45-1.69-19.35-2.87-29.49-3.31-.46-10.75-1.77-21.25-3.62-31.21-.49-2.59-1-5.13-1.54-7.67-.03-.05-.03-.1-.05-.18-.54-2.52-1.13-4.98-1.72-7.39-.82-3.34-1.69-6.6-2.59-9.75-3.03-10.6-6.42-20.1-9.57-28.03,5.65-5.01,11.7-9.42,18.02-13.27,2.98-1.85,6.01-3.54,9.09-5.11,.03,0,.05-.03,.05-.03,3.03-1.62,6.08-3.05,9.19-4.41,10.45-4.59,21.25-8.06,31.85-10.68,2.72-.67,5.42-1.28,8.11-1.82,2.64-.56,5.29-1.05,7.88-1.49,27.98-4.9,52.64-4.39,63.53-3.8,.21,3.52,.38,8.5,.38,14.55Z"
            />
            <path
              className="d middle one-middle"
              d="M555.32,239.2c-8.93,3.77-19.64,8.86-31.01,15.32-2.34,1.31-4.7,2.7-7.08,4.18-1.69,1-3.41,2.08-5.11,3.18-.51,.31-1,.62-1.49,.95-2.16,1.41-4.34,2.85-6.49,4.36-7.98,5.54-15.97,11.78-23.56,18.76-7.83-7.21-16.09-13.6-24.33-19.3-2.18-1.49-4.34-2.95-6.52-4.34-.23-.15-.46-.31-.69-.44-1.98-1.28-3.95-2.52-5.9-3.7-2.75-1.64-5.44-3.21-8.11-4.7-11.09-6.21-21.48-11.06-30.13-14.71,.92-8.14,2.64-16.07,4.98-23.77,.95-3.21,2.03-6.39,3.18-9.5,1.16-3.11,2.39-6.13,3.72-9.14,4.49-10.19,9.86-19.82,15.58-28.7,1.49-2.31,3-4.57,4.54-6.8,1.54-2.21,3.08-4.36,4.62-6.47,15.25-20.59,31.03-35.7,38.55-42.45,7.52,6.72,23.28,21.79,38.48,42.33,1.57,2.1,3.13,4.26,4.65,6.47,1.57,2.21,3.08,4.49,4.57,6.8,5.75,8.91,11.14,18.56,15.66,28.8,1.31,2.98,2.54,6.03,3.7,9.11,1.16,3.11,2.23,6.29,3.18,9.5,2.39,7.83,4.13,15.94,5.03,24.23Z"
            />
            <path
              className="d middle four-middle"
              d="M747.19,745.57c-10.68,.56-34.52,1.08-61.76-3.47-2.54-.44-5.13-.92-7.75-1.44-2.64-.54-5.29-1.1-7.96-1.72-10.45-2.46-21.07-5.78-31.44-10.14-3.16-1.31-6.26-2.72-9.34-4.26-3.13-1.54-6.21-3.21-9.24-5.01-7.29-4.29-14.27-9.24-20.71-14.99,3.52-8.78,7.37-19.51,10.7-31.62,.85-2.98,1.62-6.03,2.39-9.16,.54-2.28,1.08-4.59,1.57-6.93,.05-.23,.1-.44,.15-.67,.51-2.54,1.03-5.08,1.49-7.67,1.67-9.42,2.85-19.3,3.29-29.39,10.7-.46,21.18-1.77,31.11-3.59,2.23-.41,4.44-.87,6.62-1.33,.33-.08,.67-.13,1.03-.21,2.57-.56,5.11-1.16,7.6-1.77,3.75-.92,7.37-1.9,10.88-2.93,12.12-3.52,22.74-7.44,31.19-10.96,5.8,6.62,10.78,13.78,15.07,21.25,1.75,3.05,3.36,6.16,4.9,9.32,1.49,3.08,2.87,6.21,4.18,9.37,4.18,10.24,7.32,20.71,9.68,31.01,.62,2.62,1.18,5.26,1.69,7.85,.31,1.59,.59,3.16,.87,4.72,.18,1.03,.33,2.03,.51,3.05,.23,1.39,.44,2.75,.64,4.11,.36,2.44,.67,4.83,.95,7.19,2.62,21.92,2.18,40.35,1.69,49.39Z"
            />
            <path
              className="d middle six-middle"
              d="M362.51,705.43c-6.29,5.49-13.09,10.27-20.17,14.4-3.03,1.77-6.08,3.44-9.21,4.98-3.05,1.51-6.19,2.87-9.29,4.18-10.34,4.31-20.95,7.57-31.37,10.01-2.67,.64-5.31,1.21-7.96,1.72-2.62,.51-5.21,1-7.75,1.44-27.11,4.47-50.8,3.98-61.42,3.41-.56-10.45-1.05-33.5,3.18-59.96,.41-2.57,.87-5.16,1.36-7.78,.51-2.59,1.05-5.21,1.67-7.85,2.34-10.32,5.44-20.87,9.63-31.19,1.28-3.13,2.67-6.26,4.13-9.34,1.51-3.13,3.11-6.21,4.83-9.24,4.29-7.57,9.24-14.78,15.04-21.46,8.75,3.57,19.69,7.57,32.11,11.09,3.21,.9,6.49,1.77,9.88,2.59,2.49,.62,5.03,1.18,7.6,1.72,.03,.03,.08,.03,.1,.03,2.49,.54,5.01,1.05,7.55,1.51,9.65,1.75,19.82,2.98,30.19,3.41,.44,10.42,1.69,20.61,3.47,30.31,.46,2.52,.95,4.98,1.46,7.42,.03,.08,.03,.15,.05,.23,.56,2.59,1.13,5.11,1.75,7.62,.87,3.49,1.75,6.93,2.7,10.24,3.34,11.7,7.08,22.05,10.5,30.49Z"
            />
            <path
              className="d middle five-middle"
              d="M557.45,723.94c-1.05,8.16-2.87,16.15-5.29,23.87-1,3.21-2.1,6.37-3.29,9.47-1.18,3.08-2.46,6.11-3.82,9.09-4.54,10.06-9.91,19.56-15.63,28.29-1.49,2.31-3.03,4.54-4.57,6.75-1.51,2.16-3.05,4.29-4.59,6.37-15.02,20.07-30.42,34.81-37.81,41.45-7.62-6.85-23.79-22.31-39.25-43.38-1.57-2.13-3.11-4.29-4.65-6.52-1.54-2.26-3.05-4.57-4.54-6.9-5.75-9.01-11.11-18.76-15.53-29.11-1.31-3.03-2.52-6.11-3.64-9.24-1.13-3.13-2.16-6.31-3.11-9.55-2.05-7.19-3.59-14.55-4.47-22.1,8.24-3.54,17.86-8.11,28.08-13.86,2.87-1.62,5.8-3.34,8.75-5.13,2.18-1.31,4.36-2.7,6.57-4.13h.03c2.16-1.41,4.34-2.87,6.49-4.39,7.93-5.52,15.86-11.73,23.38-18.63,7.78,7.14,15.97,13.53,24.15,19.17,1.93,1.33,3.85,2.62,5.75,3.85,.26,.18,.51,.33,.77,.49,2.23,1.44,4.44,2.82,6.62,4.16,3.29,1.98,6.55,3.88,9.73,5.62,11.04,6.08,21.36,10.86,29.85,14.37Z"
            />
            <path
              className="d middle seven-middle"
              d="M285.43,481.12c-7.03,7.65-13.32,15.71-18.92,23.77-1.49,2.18-2.93,4.34-4.34,6.52-.1,.15-.21,.31-.31,.46-1.33,2.05-2.59,4.11-3.85,6.13-1.72,2.85-3.39,5.7-4.95,8.5-6.24,11.11-11.11,21.54-14.78,30.21-8.21-.9-16.27-2.62-24.08-4.98-3.21-.95-6.39-2.05-9.52-3.21-3.13-1.16-6.19-2.41-9.21-3.75-10.16-4.47-19.76-9.81-28.59-15.5-2.34-1.49-4.59-3-6.8-4.54-2.21-1.51-4.34-3.05-6.42-4.59-20.69-15.27-35.86-31.14-42.61-38.66,6.8-7.6,22.13-23.61,43.02-38.99,2.1-1.54,4.26-3.08,6.47-4.62,2.23-1.54,4.49-3.05,6.83-4.54,8.96-5.72,18.66-11.09,28.93-15.53,3.03-1.33,6.13-2.54,9.27-3.7,3.13-1.16,6.34-2.23,9.57-3.18,7.6-2.21,15.45-3.85,23.46-4.72,3.59,8.52,8.37,18.66,14.4,29.47,.03,0,.03,.03,.03,.03,1.57,2.77,3.18,5.57,4.9,8.39,1.26,2.1,2.59,4.21,3.95,6.31,.05,.1,.13,.21,.18,.31,1.41,2.16,2.87,4.34,4.36,6.49,5.62,8.14,11.94,16.22,19.02,23.92Z"
            />
          </g>
          <g>
            <path
              className="d inner eight-petal"
              d="M470.29,296.18c-11.37,12.17-21.33,26.21-28.36,42.3-.36,.8-.69,1.59-1.03,2.41-.54,1.33-1.08,2.67-1.57,4-.46,.13-.95,.28-1.41,.44-2.39,.74-4.75,1.57-7.06,2.44-2.26,.85-4.47,1.75-6.65,2.7-.05,0-.1,.03-.13,.05-2.23,.98-4.44,2-6.6,3.08-1.33,.67-2.64,1.33-3.95,2.05-1.05-.49-2.13-.95-3.21-1.39-.26-.13-.54-.26-.82-.36-.8-.33-1.57-.64-2.36-.95-16.4-6.42-33.39-9.32-50.05-9.88,.36-7.37,1.16-14.61,2.26-21.64,.39-2.57,.85-5.11,1.31-7.62,.49-2.54,1-5.03,1.54-7.49,3.13-14.04,7.21-26.77,11.09-37.22,.98-2.64,1.95-5.13,2.9-7.47,1.05-2.62,2.05-5.03,3-7.21,1.51-3.49,2.85-6.39,3.93-8.62,1.85,.64,4.08,1.46,6.67,2.46,2.16,.82,4.54,1.77,7.14,2.87,2.26,.92,4.67,1.95,7.19,3.11,10.52,4.7,23.18,11.09,36.14,19.3,1.08,.67,2.13,1.36,3.21,2.05,1.05,.69,2.13,1.41,3.18,2.13,2.1,1.41,4.21,2.87,6.29,4.41,5.9,4.29,11.76,8.96,17.35,14.04Z"
            />
            <path
              viewBox="0 50 0 0"
              className="d inner one-petal"
              d="M604.07,343.08c-16.66,.56-33.65,3.47-50.05,9.88-.56,.21-1.1,.44-1.67,.67-.23,.1-.46,.18-.69,.28-1.36,.56-2.7,1.16-4.03,1.75-.87-.49-1.77-.95-2.67-1.41-2.21-1.13-4.44-2.21-6.72-3.21-.64-.31-1.26-.56-1.9-.85-2.23-.98-4.52-1.87-6.8-2.72-2.34-.85-4.72-1.67-7.11-2.39-.18-.08-.39-.13-.59-.18-2.85-.87-5.72-1.67-8.65-2.34-2.85-.69-5.72-1.28-8.65-1.77-7.78-1.33-15.79-2.03-23.95-2.03s-16.17,.69-23.95,2.03c.98-2.03,2-4.03,3.05-5.98,5.75-10.5,12.91-19.97,20.89-28.52,1.64-1.75,3.34-3.47,5.03-5.16,1.72-1.69,3.49-3.34,5.26-4.95,5.36-4.85,10.93-9.37,16.61-13.5,2.08-1.54,4.21-3.03,6.31-4.47,2.13-1.46,4.24-2.85,6.37-4.21,12.78-8.16,25.33-14.58,35.86-19.33,2.54-1.13,4.95-2.18,7.21-3.13,2.57-1.08,4.95-2.05,7.11-2.87v-.03c3.03-1.16,5.62-2.1,7.7-2.85,1.18,2.46,2.67,5.7,4.36,9.63,.95,2.21,1.95,4.62,3,7.26,.92,2.34,1.9,4.88,2.87,7.52,3.7,10.04,7.49,22.07,10.5,35.27,.54,2.46,1.05,4.95,1.57,7.49,.46,2.49,.92,5.03,1.33,7.6,1.15,7.32,2,14.84,2.39,22.51Z"
            />
            <path
              className="d inner two-petal"
              d="M715.9,383.66c-.59,1.69-1.36,3.75-2.26,6.08v.03c-.28,.8-.59,1.59-.92,2.44,0,.03-.03,.03-.03,.05-.87,2.16-1.82,4.54-2.9,7.08-.98,2.28-2.03,4.7-3.18,7.24,0,.03-.03,.03-.03,.05-4.57,10.01-10.58,21.79-18.2,33.8-.74,1.18-1.51,2.39-2.28,3.57-.62,.95-1.26,1.9-1.9,2.85-1.41,2.1-2.9,4.21-4.41,6.31-4.36,6.01-9.11,11.96-14.27,17.66-12.24-11.47-26.46-21.43-42.74-28.49-.67-.31-1.31-.62-1.98-.9-1.15-.49-2.31-.92-3.44-1.36-.33-.13-.67-.26-.98-.39-.64-2.1-1.33-4.18-2.08-6.26-.67-1.95-1.41-3.9-2.18-5.8-.13-.36-.28-.72-.44-1.08-.8-1.93-1.64-3.82-2.52-5.7-1.03-2.21-2.1-4.39-3.23-6.52-.05-.08-.08-.15-.13-.23-1.36-2.57-2.82-5.11-4.34-7.57-1.54-2.52-3.16-4.98-4.88-7.37v-.03c-9.27-13.19-20.77-24.74-33.91-34.11,2.1-.74,4.24-1.44,6.39-2.05,11.52-3.41,23.36-5.06,35.09-5.44,2.41-.1,4.83-.13,7.24-.08,2.41,0,4.83,.08,7.21,.18,7.08,.36,14.07,1.1,20.84,2.13,2.57,.38,5.11,.82,7.62,1.28,2.54,.49,5.06,1,7.52,1.54,16.45,3.59,31.16,8.52,42.53,12.96,2.62,1.03,5.08,2.03,7.34,2.98,1.46,.62,2.85,1.23,4.16,1.8,1.03,.46,2,.9,2.93,1.31,1.64,.74,3.08,1.44,4.34,2.03Z"
            />
            <path
              className="d inner three-petal"
              d="M715.9,578.6c-1.51,.72-3.39,1.59-5.49,2.52-2.13,.98-4.52,2-7.16,3.11-2.28,.95-4.72,1.95-7.37,2.95-10.83,4.18-24.54,8.73-39.81,12.17-2.46,.56-4.98,1.08-7.52,1.57-2.49,.49-5.01,.95-7.57,1.33-7.24,1.16-14.73,1.98-22.33,2.36-.59-16.94-3.62-34.24-10.27-50.87-.21-.51-.39-1.03-.59-1.51-.33-.82-.72-1.57-1.05-2.36-.36-.8-.74-1.62-1.1-2.41,0-.03,.03-.05,.03-.08,.82-1.51,1.59-3,2.34-4.54v-.03c.85-1.72,1.67-3.47,2.44-5.21v-.03c.23-.49,.44-1,.67-1.49v-.03c.74-1.72,1.44-3.49,2.1-5.26,.9-2.31,1.72-4.67,2.46-7.03v-.03c.13-.36,.23-.69,.36-1.05,.87-2.85,1.67-5.75,2.36-8.65,.72-2.85,1.31-5.72,1.85-8.65,1.41-8.06,2.16-16.32,2.16-24.8s-.67-15.91-1.98-23.61c2.03,.95,4.03,1.95,5.98,3,10.68,5.78,20.33,13.06,28.98,21.18,1.77,1.64,3.49,3.31,5.18,5.01,1.69,1.72,3.34,3.49,4.95,5.26,4.7,5.21,9.06,10.6,13.09,16.07,1.54,2.08,3.03,4.18,4.49,6.26,1.46,2.16,2.85,4.29,4.24,6.42,8.83,13.76,15.61,27.23,20.51,38.24,1.13,2.57,2.16,4.98,3.08,7.21,1.08,2.59,2,4.98,2.82,7.11,.85,2.23,1.57,4.24,2.16,5.88Z"
            />
            <path
              className="d inner four-petal"
              d="M604.27,611.92c0,2.44-.1,4.85-.21,7.26-.36,7.01-1.08,13.94-2.1,20.66-.39,2.57-.82,5.11-1.28,7.62-.46,2.54-.98,5.03-1.51,7.52-3.16,14.4-7.32,27.46-11.29,38.14-.98,2.64-1.95,5.16-2.9,7.52-1.05,2.62-2.08,5.03-3.03,7.24-1.49,3.41-2.82,6.31-3.9,8.55-1.51-.54-3.36-1.21-5.42-2-2.13-.8-4.49-1.72-7.08-2.8-2.23-.9-4.59-1.9-7.08-3-10.86-4.8-24.13-11.42-37.76-20.07-2.13-1.36-4.26-2.75-6.39-4.21-2.13-1.44-4.24-2.9-6.31-4.44-5.83-4.24-11.58-8.86-17.09-13.86,11.63-12.47,21.77-26.93,28.82-43.53,.18-.39,.39-.77,.54-1.18,.72-1.75,1.39-3.47,2.03-5.21,.69-.21,1.39-.44,2.05-.67h.03c2.39-.74,4.72-1.59,7.01-2.49h.03c2.16-.82,4.31-1.69,6.42-2.64,.1-.05,.23-.1,.33-.15,2.18-.95,4.31-1.98,6.42-3.05,.67-.33,1.31-.69,1.98-1.05h.03s.03-.03,.05-.03c1.57-.82,3.13-1.64,4.65-2.54,1.03-.59,2.05-1.21,3.05-1.82,2.52-1.54,4.98-3.16,7.39-4.85,13.42-9.39,25.15-21.05,34.65-34.42,.74,2.1,1.46,4.21,2.1,6.34,3.57,11.81,5.31,23.95,5.7,35.96,.1,2.41,.13,4.83,.1,7.21Z"
            />
            <path
              className="d inner five-petal"
              d="M505.04,620.29c-.95,2.03-1.93,4.03-2.98,5.98-5.83,10.93-13.22,20.82-21.48,29.65-1.64,1.77-3.31,3.49-5.03,5.18-1.75,1.69-3.49,3.34-5.29,4.95-5.29,4.8-10.78,9.24-16.35,13.35-2.1,1.54-4.21,3.03-6.31,4.47-2.13,1.46-4.26,2.87-6.39,4.24-12.32,7.88-24.38,14.09-34.68,18.81-2.49,1.13-4.9,2.21-7.19,3.18-2.54,1.08-4.9,2.05-7.08,2.9-3.62,1.44-6.75,2.59-9.14,3.44-.98-2-2.16-4.54-3.47-7.55-.95-2.16-1.98-4.59-3.05-7.21-.92-2.31-1.9-4.77-2.9-7.42-4-10.68-8.27-23.85-11.5-38.42-.56-2.46-1.08-4.95-1.57-7.49-.46-2.52-.9-5.03-1.31-7.6-1.08-7.01-1.87-14.25-2.23-21.56,17.04-.59,34.42-3.64,51.16-10.37,.41-.18,.85-.31,1.26-.49,.36-.15,.72-.33,1.08-.49,1.33-.56,2.64-1.21,3.95-1.8,.03,0,.05,.03,.08,.03,1.08,.59,2.16,1.16,3.23,1.69h.03c2.21,1.1,4.47,2.13,6.75,3.11,.44,.21,.87,.39,1.31,.56,2.23,.95,4.52,1.85,6.83,2.64,2.03,.74,4.06,1.44,6.11,2.05h.03c.33,.13,.64,.21,.98,.31,2.52,.74,5.03,1.44,7.6,2.03,2.85,.72,5.72,1.31,8.62,1.82h.03c7.96,1.39,16.12,2.1,24.46,2.1s16.5-.72,24.46-2.1Z"
            />
            <path
              className="d inner six-petal"
              d="M399.44,596.83c-2.1,.77-4.21,1.49-6.34,2.13-11.86,3.62-24.03,5.36-36.11,5.75-2.41,.1-4.83,.13-7.21,.13-2.44-.03-4.85-.13-7.26-.23-7.29-.36-14.48-1.13-21.46-2.21-2.57-.41-5.08-.85-7.6-1.31-2.54-.49-5.03-1-7.49-1.57-15.17-3.34-28.82-7.8-39.73-11.96-2.62-1-5.08-2-7.37-2.93-2.64-1.1-5.03-2.13-7.19-3.08-2.49-1.13-4.67-2.13-6.42-2.95,.67-1.9,1.51-4.24,2.57-6.9,.82-2.16,1.77-4.52,2.82-7.08,.95-2.26,2-4.7,3.13-7.24,4.77-10.63,11.24-23.41,19.58-36.47,1.36-2.13,2.75-4.29,4.21-6.42,1.44-2.1,2.93-4.21,4.47-6.31,4.16-5.7,8.7-11.32,13.6-16.76,12.35,11.55,26.64,21.64,43.07,28.67v.03c.54,.23,1.08,.46,1.64,.69,1.59,.67,3.16,1.28,4.77,1.87,.05,.1,.08,.23,.13,.36,.74,2.39,1.57,4.75,2.44,7.08,.77,2.08,1.59,4.11,2.46,6.13,.08,.23,.18,.46,.28,.67,.9,2.05,1.82,4.08,2.82,6.08v.03c.72,1.44,1.46,2.9,2.23,4.34,0,.03,.03,.05,.05,.08,.38,.77,.82,1.51,1.23,2.26,0,0,0,.03,.03,.03,1,1.82,2.05,3.59,3.13,5.34,1.54,2.49,3.18,4.95,4.85,7.34v.03c9.5,13.35,21.23,25,34.65,34.39Z"
            />
            <path
              className="d inner seven-petal"
              d="M398.47,365.02c-13.14,9.37-24.62,20.92-33.91,34.11v.03c-1.72,2.39-3.34,4.85-4.88,7.37-1.49,2.41-2.9,4.88-4.24,7.39-.08,.13-.15,.26-.23,.41-1.1,2.08-2.16,4.18-3.13,6.31-.8,1.64-1.54,3.31-2.23,5.01-.26,.59-.51,1.18-.74,1.77-.69,1.67-1.33,3.36-1.93,5.08-.87,2.34-1.67,4.7-2.36,7.11-.03,.03-.03,.05-.05,.08v.03c-.85,2.85-1.62,5.72-2.31,8.62-.67,2.82-1.23,5.7-1.72,8.6v.03c-1.31,7.7-1.98,15.55-1.98,23.61,0,8.47,.74,16.74,2.16,24.8-2.03-.95-4.03-1.95-5.98-3-10.75-5.8-20.46-13.12-29.16-21.23l-.03-.03c-1.75-1.64-3.47-3.34-5.16-5.03-1.69-1.72-3.34-3.49-4.95-5.26-4.95-5.47-9.55-11.17-13.73-16.94-1.54-2.08-3.03-4.18-4.47-6.29-1.44-2.13-2.85-4.29-4.21-6.42-8.09-12.73-14.43-25.15-19.12-35.6-.03,0-.03-.03-.03-.03-1.15-2.54-2.21-4.93-3.13-7.21v-.03c-1.1-2.54-2.03-4.93-2.87-7.06,0-.03-.03-.03-.03-.05-1.16-2.95-2.08-5.49-2.8-7.55,1.49-.72,3.23-1.54,5.26-2.44,2.1-.95,4.49-2,7.14-3.08,2.26-.95,4.7-1.95,7.32-2.95,11.04-4.26,25.08-8.93,40.71-12.42,2.46-.54,4.95-1.05,7.49-1.57,2.52-.46,5.06-.9,7.62-1.31,7.06-1.1,14.35-1.87,21.74-2.26,2.39-.1,4.8-.18,7.21-.18,2.41-.05,4.83-.03,7.24,.08,11.73,.39,23.56,2.03,35.09,5.44,2.16,.62,4.29,1.31,6.39,2.05Z"
            />
          </g>
          <g>
            <path
              className="d outer three-outer"
              d="M886.95,648.37c-12.94,6.19-47.79,21.33-87.37,25.26-2.8,.28-5.65,.51-8.5,.67-2.98,.15-5.98,.28-8.98,.31-8.5,.05-17.09-.54-25.62-1.9-1.67-8.19-3.8-16.61-6.49-25.03-1.1-3.41-2.28-6.8-3.59-10.22-1.28-3.34-2.64-6.67-4.13-9.98-5.54-12.35-12.63-24.33-21.59-35.24,4.24-2,6.83-3.39,7.42-3.72l5.08-2.77-1.64-5.54c-.21-.69-1.16-3.82-2.9-8.7,14.01-1.95,27.41-5.88,39.96-11.09,3.21-1.33,6.37-2.77,9.47-4.26,3.18-1.51,6.26-3.11,9.32-4.75,7.98-4.34,15.53-9.06,22.54-13.91,7.73,5.39,14.84,11.5,21.33,18.1,2.1,2.13,4.16,4.31,6.13,6.55,1.9,2.1,3.75,4.26,5.54,6.44,25.26,30.8,39.27,66.25,44.02,79.8Z"
            />
            <g>
              <path
                className="d outer one-outest"
                d="M552.83,112.58c-9.42,8.44-18.3,17.97-25.92,28.65-20.41-26.39-40.63-42.94-42.33-44.3l-4.52-3.64-4.49,3.64c-1.69,1.36-22,17.99-42.43,44.46-7.65-10.65-16.5-20.12-25.9-28.49C419.69,57.73,465.49,13.09,480.07,0c14.58,13.06,60.24,57.5,72.77,112.58Z"
              />
              <path
                className="d outer eight-outest"
                d="M273.13,206.4c-34.96-4.98-62.99-2.18-65.25-1.95l-5.78,.62-.59,5.75c-.23,2.21-2.93,29.03,1.62,62.86-11.58-1.59-23.15-1.87-34.39-1.23-30.21-47.79-29.42-111.73-28.34-131.32,19.56-1.08,83.27-1.93,131.06,28.16-.69,12.14-.28,24.64,1.67,37.12Z"
              />
              <path
                className="d outer seven-outest"
                d="M140.69,528.58c-10.34,7.5-19.58,16.15-27.77,25.33-55.16-12.45-99.82-58.21-112.91-72.82,13.04-14.58,57.52-60.22,112.6-72.74,8.37,9.37,17.81,18.17,28.41,25.77-13.4,10.29-24.31,20.59-32.06,28.52-7.73,7.93-12.29,13.48-12.99,14.35l-3.62,4.49,3.62,4.49c1.39,1.72,18.1,22.13,44.71,42.61Z"
              />
              <path
                className="d outer six-outest"
                d="M272.44,792.42c-47.79,30.21-111.73,29.44-131.32,28.36-1.1-19.56-1.9-83.27,28.18-131.09,3.59,.21,7.21,.31,10.83,.31,7.67,0,15.45-.49,23.23-1.54-4.88,34.65-2.1,62.32-1.85,64.55l.59,5.75,5.78,.62c1.21,.13,9.86,1,23.05,1,11.5,0,26.44-.67,42.87-3.05-1.67,11.81-2,23.61-1.36,35.09Z"
              />
              <path
                className="d outer five-outest"
                d="M553.89,848.27c-12.45,55.16-58.19,99.82-72.79,112.91-14.58-13.09-60.22-57.62-72.74-112.66,9.68-8.65,18.79-18.46,26.59-29.52,20.61,26.93,41.3,43.87,43.02,45.25l4.49,3.64,4.52-3.64c1.67-1.36,21.54-17.63,41.71-43.58,7.49,10.27,16.09,19.43,25.21,27.59Z"
              />
              <path
                className="d outer four-outest"
                d="M820.75,820.06c-19.53,1.08-83.27,1.9-131.09-28.21,.64-11.32,.31-22.95-1.31-34.57,16.58,2.44,31.65,3.11,43.25,3.11,13.17,0,21.84-.87,23.05-1l5.75-.62,.62-5.75c.23-2.21,2.93-29.11-1.64-63.04,.03-.31,.08-.64,.08-.98,0-.44-.05-.87-.13-1.31,7.39,.95,14.78,1.39,22.07,1.39,3.7,0,7.37-.13,11.01-.33,30.19,47.82,29.42,111.73,28.34,131.32Z"
              />
              <path
                className="d outer three-outest"
                d="M961.16,480.09c-13.04,14.58-57.52,60.22-112.63,72.74-7.85-8.75-16.63-17.04-26.44-24.31,25.8-20.12,41.97-39.84,43.3-41.53l3.64-4.49-3.64-4.49c-1.41-1.77-18.89-23.13-46.64-44.1,11.06-7.83,20.87-16.94,29.54-26.64,27.57,6.24,52.52,20.79,72.2,35.6,19.69,14.84,34.14,29.9,40.66,37.22Z"
              />
              <path
                className="d outer two-outest"
                d="M791.85,271.49c-10.58-.59-21.43-.36-32.29,1,4.31-33.27,1.69-59.5,1.46-61.68l-.62-5.75-5.75-.62c-2.31-.26-31.6-3.18-67.71,2.31,2.08-12.78,2.49-25.59,1.77-38.01,47.79-30.21,111.76-29.39,131.34-28.34,1.08,19.56,1.93,83.27-28.21,131.09Z"
              />
              <path
                className="d outer eight-outer"
                d="M424.19,153.67c-5.06,7.39-9.96,15.35-14.4,23.82-1.59,3-3.11,6.08-4.57,9.24-1.44,3.11-2.8,6.26-4.08,9.5-4.67,11.73-8.24,24.15-10.04,37.14-5.42-1.95-8.88-3-9.6-3.21l-5.54-1.62-2.77,5.08c-.41,.72-2.41,4.47-5.24,10.58-10.29-8.34-21.54-15.02-33.11-20.33v-.03c-3.23-1.49-6.44-2.85-9.7-4.11h-.03c-3.31-1.31-6.62-2.52-9.93-3.59-9.06-3.03-18.15-5.36-26.98-7.16-1.87-9.78-2.64-19.66-2.57-29.42,.03-3,.13-6.01,.28-8.98,.15-2.85,.39-5.65,.67-8.44,3.9-39.66,19.07-74.59,25.28-87.53,10.73,3.77,35.27,13.35,60.35,29.77,6.47,4.24,12.99,8.96,19.33,14.12,2.16,1.77,4.31,3.62,6.42,5.49,2.23,2,4.44,4.06,6.6,6.19,7.21,7.11,13.89,14.91,19.64,23.49Z"
              />
              <path
                className="d outer seven-outer"
                d="M229.62,382.04c.23,.77,1.36,4.52,3.49,10.37v.03c-12.86,1.75-25.21,5.18-36.86,9.75-3.26,1.28-6.44,2.62-9.57,4.06-3.16,1.46-6.29,2.95-9.34,4.54-8.52,4.44-16.53,9.32-23.97,14.4-8.57-5.72-16.38-12.4-23.49-19.58-2.1-2.13-4.16-4.31-6.13-6.55-1.93-2.13-3.75-4.26-5.52-6.44l-.03-.03c-25.26-30.83-39.25-66.25-43.99-79.78,12.91-6.21,47.77-21.36,87.37-25.28,2.8-.31,5.6-.51,8.44-.67,2.98-.18,5.98-.28,8.98-.28,.41-.03,.8-.03,1.21-.03,8.39,0,16.89,.62,25.33,2.03,1.59,8.27,3.62,16.76,6.26,25.28,1.05,3.36,2.18,6.72,3.41,10.09,1.21,3.31,2.52,6.62,3.93,9.88,5.44,12.63,12.42,24.92,21.36,36.14-4.26,2.03-6.85,3.41-7.44,3.75l-5.06,2.77,1.62,5.54Z"
              />
              <path
                className="d outer six-outer"
                d="M241.46,592.72c-8.88,10.93-15.91,22.92-21.41,35.29-1.46,3.29-2.85,6.6-4.11,9.93-1.28,3.39-2.46,6.78-3.54,10.16-2.72,8.55-4.85,17.09-6.49,25.39-8.75,1.46-17.58,2.08-26.31,2.03-3,0-6.01-.13-8.98-.28-2.85-.15-5.67-.39-8.47-.64-39.66-3.93-74.62-19.1-87.55-25.28,4.75-13.53,18.74-48.9,43.94-79.7,1.77-2.18,3.62-4.31,5.52-6.44,2-2.23,4.03-4.41,6.13-6.57,6.9-6.98,14.48-13.48,22.77-19.12,7.29,5.01,15.14,9.81,23.46,14.19,3.05,1.59,6.16,3.13,9.34,4.62,3.11,1.44,6.29,2.8,9.52,4.08,11.88,4.72,24.46,8.32,37.6,10.11-1.98,5.44-3.03,8.98-3.26,9.7l-1.62,5.54,5.06,2.77c.64,.36,3.59,1.93,8.39,4.21Z"
              />
              <path
                className="d outer five-outer"
                d="M425.96,806.59c-5.9,9.04-12.83,17.25-20.35,24.67-2.13,2.13-4.34,4.16-6.55,6.13-2.13,1.9-4.29,3.75-6.44,5.54-30.83,25.28-66.27,39.27-79.8,44.05-6.21-12.94-21.33-47.82-25.28-87.4-.28-2.8-.49-5.62-.64-8.47-.18-2.98-.28-5.98-.31-9.01-.08-9.09,.62-18.28,2.18-27.39,8.5-1.75,17.22-3.98,25.92-6.85,3.36-1.1,6.72-2.31,10.09-3.62,3.31-1.31,6.62-2.7,9.88-4.21,11.86-5.42,23.33-12.27,33.83-20.87,2.54,5.42,4.34,8.78,4.7,9.47l2.77,5.08,5.54-1.64c.82-.26,5.24-1.57,12.04-4.11,1.75,12.29,5.01,24.1,9.34,35.29,1.23,3.21,2.57,6.37,3.98,9.47,1.41,3.16,2.87,6.26,4.44,9.29,4.49,8.73,9.47,16.94,14.66,24.56Z"
              />
              <path
                className="d outer four-outer"
                d="M675.53,781.56c-.03,3.03-.13,6.01-.31,9.01-.15,2.82-.36,5.65-.64,8.47-3.93,39.63-19.07,74.59-25.28,87.53-13.53-4.75-48.9-18.71-79.67-43.92-2.18-1.8-4.34-3.64-6.44-5.54-2.23-1.98-4.44-4.03-6.57-6.13-6.93-6.83-13.35-14.32-18.94-22.49,4.95-7.19,9.78-14.91,14.17-23.13,1.62-3.03,3.18-6.08,4.67-9.24,1.46-3.08,2.85-6.24,4.16-9.45,4.85-11.78,8.55-24.31,10.52-37.4,4.77,1.69,7.8,2.59,8.47,2.8l5.54,1.64,2.77-5.08c.39-.72,2.34-4.36,5.08-10.27,10.63,8.86,22.31,15.89,34.39,21.48,3.29,1.51,6.6,2.93,9.93,4.24,3.39,1.31,6.75,2.54,10.16,3.67,8.68,2.87,17.38,5.13,25.85,6.88,1.51,8.96,2.18,17.99,2.13,26.93Z"
              />
              <path
                className="d outer two-outer"
                d="M886.57,311.86c-3.8,10.75-13.37,35.29-29.8,60.37-4.24,6.47-8.93,12.99-14.12,19.3l-.03,.03c-1.75,2.16-3.57,4.29-5.47,6.42l-.03,.03c-1.98,2.23-4,4.39-6.11,6.55l-.03,.03c-7.44,7.55-15.66,14.5-24.74,20.43-7.73-5.16-16.02-10.09-24.82-14.53-3.08-1.51-6.21-3-9.39-4.39-3.13-1.39-6.31-2.7-9.55-3.9-11.04-4.16-22.72-7.24-34.81-8.8v-.03c2.36-6.39,3.62-10.52,3.85-11.32l1.64-5.54-5.08-2.77c-.18-.1-.51-.28-1-.54l17.17-41.5h.03c.08-.21,.15-.41,.26-.64l.08-.21c.08-.18,.18-.39,.26-.59,0-.03,.03-.08,.03-.1l1-2.41c.08-.18,.1-.36,.15-.51,.05-.1,.1-.21,.13-.31v-.03s.03-.03,.03-.05c.67-1.69,1.31-3.44,1.9-5.13v-.05c1.21-3.39,2.31-6.75,3.31-10.16,2.44-8.14,4.31-16.25,5.8-24.13,8.11-1.23,16.27-1.75,24.33-1.69,3,.03,6.01,.13,8.98,.28,2.85,.15,5.67,.38,8.47,.67,39.66,3.9,74.62,19.07,87.55,25.26Z"
              />
              <path
                className="d outer one-outer"
                d="M674.58,180.27c0,9.7-.82,19.53-2.72,29.24-9.04,1.93-18.3,4.44-27.54,7.65-3.31,1.18-6.6,2.41-9.88,3.8h-.05c-3.26,1.33-6.49,2.77-9.7,4.34-10.91,5.26-21.43,11.76-31.11,19.74-3-6.6-5.18-10.65-5.6-11.4l-2.77-5.08-5.54,1.62c-.77,.23-4.59,1.39-10.58,3.57-1.77-13.12-5.36-25.67-10.09-37.5-1.28-3.23-2.64-6.39-4.08-9.5-1.44-3.13-2.98-6.21-4.54-9.21-4.47-8.52-9.42-16.56-14.5-23.97,5.75-8.65,12.47-16.5,19.71-23.67,2.13-2.1,4.31-4.16,6.55-6.13,2.1-1.9,4.26-3.75,6.44-5.52,30.8-25.26,66.25-39.25,79.78-44.02,6.21,12.94,21.33,47.82,25.28,87.4,.28,2.8,.49,5.6,.64,8.44v.03c.18,2.98,.28,5.98,.28,9.01,.03,.38,.03,.8,.03,1.18Z"
              />
            </g>
          </g>
        </g>
      </svg>  
    </div>
  )
}

export default FlowerLogo