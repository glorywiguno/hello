import { useEffect } from 'react';
import anime from "animejs";

/**
 * Hello SVG
 * @returns
 */
const HelloSVG = (props: { className?:string, width?: number, height?: number }) => {

  useEffect(() => {
    // animate on first load
    anime({
      targets: '#hello-svg .path',
      direction: 'normal',
      strokeDashoffset: [anime.setDashoffset, 0],
      // might need to set it that it reads value dynamically later
      stroke: "#333",
      easing: 'easeInOutSine',
      duration: 300,
      delay: anime.stagger(300)
    });
  }, []);

  return (
    <svg
      id="hello-svg"
      className={props.className}
      width={props.width}
      height={props.height}
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 319.25 376.74"
    >
      <g id="clips">
        <clipPath id="h1">
          <path d="M1.4 64C1 65.74.61 67.46.15 69.17a4.5 4.5 0 003.11 5.47c8.24 2 15-.12 21.36-5.52a62.48 62.48 0 0014.31-18c7.49-14 8.18-30 5.89-45.47-1-7-13-6.94-14 0C28.15 22.75 27 40 24.93 57.22c-2.1 17.54-4.33 35.06-6.36 52.61q-6 52.05-11 104.23c-.62 6.38 5.9 11.86 11.86 11.86 6.85 0 11.34-5.45 11.86-11.86q4.18-51.59 7.48-103.24c1.08-17.2 2-34.41 3-51.62s2.93-34.38 3.35-51.61L30.78 9.52c2.83 10.77.63 21.73-3.91 31.75-3.8 8.36-11.41 24.86-22.43 24.63l4.3 3.27C8.08 67.46 7.5 65.75 6.92 64c-.85-2.5-4.85-2.9-5.52 0z"/>
        </clipPath>
        <clipPath id="h2">
          <path d="M5.8 132c12.79 6.93 28.53 1.52 39.69-6.22 12-8.35 20-21.49 26.37-34.36 13.69-27.6 15.46-58.14 22.7-87.54.91-3.7-3.73-5.24-5.81-2.45C87 3.77 86.14 4.57 85.2 7.34c-.73 2.15-1.38 4.32-2 6.48q-2.2 6.95-4.28 13.93c-2.55 8.66-4.66 17.44-6.69 26.25-4.12 17.85-7.39 35.88-10.32 54q-4.44 27.51-6.58 55.26c-1.31 16.66-.83 33.15 10.26 46.6C72.65 218.4 87 207.22 81 198c-7.79-11.94-5.32-27-4.54-40.5 1-17.6 2.3-35.26 4.14-52.79 1.82-17.21 4.22-34.36 7-51.45 1.4-8.64 2.87-17.27 4.29-25.91q1.11-6.78 2.3-13.5c.34-1.85.91-3.85 1.08-5.75.19-2.12-.43-3.82-.71-5.91L88.31 3c.91 27.33-3.83 56.7-16.09 81.4-11.66 23.53-36.06 51.17-65.16 44.6-1.75-.39-3 2.08-1.26 3z"/>
        </clipPath>
        <clipPath id="e">
          <path d="M96.42 177.74c-.2.79-.37 1.58-.49 2.37a1.88 1.88 0 001.29 2.28c5.87 1 12.65-3 17.11-6.5 5.54-4.37 10.68-10.48 12.14-17.55a16.54 16.54 0 00-6.47-16.79c-5.74-4.14-13.25-3.55-19.19-.11-12.84 7.44-17.2 25-15.16 38.79 1.83 12.29 9.47 29.05 24.87 22.32 7.49-3.28 12.61-10.71 16.73-17.47a96.74 96.74 0 0010.27-24.2c.57-2-2.34-2.71-3.07-.85a83.19 83.19 0 01-9.66 17.56c-3.67 5.16-8.06 11-13.31 14.73-13.15 9.22-15.14-13.67-14.88-21.82.19-5.88 1.85-12.45 6-16.83 3.34-3.55 10.54-6.7 13.62-1 2.88 5.3-2.47 12.27-6 15.9a54.8 54.8 0 01-6.93 5.88c-2.28 1.68-5 2.76-6.88 4.87l2.24-.29-.39-1a.94.94 0 00-1.84-.25z"/>
        </clipPath>
        <clipPath id="l1">
          <path d="M147.15 55.89l-.14-.25-.22 1.71-.89.23-1.9-1.86c.24.76-2 5.35-2.28 6.44-.69 3.14-1.06 6.4-1.57 9.58-1 6.4-1.77 12.79-2.44 19.23q-2 19.08-3.46 38.19c-1 12.72-1.31 25.48-1.57 38.23q-.19 9.81-.21 19.62c0 5.73-.38 12 5.59 14.91 4.55 2.24 10.82-.41 10.61-6.09-.1-2.74-.48-5.07-.42-7.84.08-3.59.18-7.19.28-10.79.18-6.54.36-13.08.6-19.61.52-14.05 1-28.09 1.4-42.15.45-13.69 1.44-27.39 1.66-41.09.09-5.75 1.53-13.28-1.08-18.68-1.27-2.64-4.31-4.59-6.8-2.18a2.32 2.32 0 00-.61 2.28 2.74 2.74 0 001.34 1.8 1.44 1.44 0 001.71-.22l.2-.21a1.06 1.06 0 00.16-1.25z"/>
        </clipPath>
        <clipPath id="l2">
          <path d="M146.51 199.58c3.25-1.37 4.59-4.1 5.72-7.3 2.06-5.85 3.65-11.92 5.39-17.87 3.53-12.08 6.64-24.33 9.31-36.64a275.07 275.07 0 005.18-35.45c.53-6.35.9-12.74 1.11-19.11.22-6.8 0-13.8 1.92-20.34 1.07-3.55-4.26-4.92-5.5-1.51-3.08 8.5-3.47 17.79-5 26.65-1.41 8.3-2.47 16.87-3.32 25.25-1.83 18-3.28 36.05-3.35 54.16 0 10.93-2.16 41.27 16.57 36.05a10.12 10.12 0 006.08-5.06c1.83-3.5 3.75-6.9 5.75-10.33A205.94 205.94 0 00198 164.55c.6-1.4-1.3-2.64-2.1-1.23-3.4 6-7 11.74-10.68 17.55-2.23 3.55-6.79 14.55-12.29 12.4l3.19 2.46-.5-1 .61 4.64c-.54 1.74.74-2.11.81-2.53.15-.78.13-1.55.23-2.33.37-2.79.77-5.53 1-8.34.53-5.91.65-11.79.62-17.73q-.08-18.21-.57-36.45c-.33-11.8-1.34-23.62-1.37-35.43 0-5.92-.66-11.79-.57-17.71a83 83 0 00-1.21-17.46l-5.21 2.2c5 10.27 3.08 24.89 1.69 35.9a336.75 336.75 0 01-6.65 34.75c-2.52 10.69-5.26 21.32-8.29 31.88-1.61 5.59-3.19 11.18-4.78 16.77-1.33 4.65-2.12 12-6.61 14.67-1.33.81-.17 2.6 1.18 2z"/>
        </clipPath>
        <clipPath id="o1">
          <path d="M216 150.4c-2.58-2.75-4.7-4.35-8.71-3.55A19.13 19.13 0 00197 153.1c-5.67 6.52-7.08 15.65-5.92 23.94 1.2 8.55 5.13 18.6 12.66 23.52s16.08 1.76 21.91-4.37c11.31-11.92 21.11-33.49 5.6-46.34-4.75-3.94-10.58-6-15.94-1.87a13.48 13.48 0 00-4 16.17c8.71 18.18 33.69-.33 40.42-10.72 1.62-2.49-2.09-5.37-4.12-3.18-5.63 6.07-24.53 25.12-32.14 11.82-4.6-8 7-17.62 11.77-8.24 2.82 5.57.18 13.78-2.36 19a55 55 0 01-10 13.63c-1.42 1.49-2.24 2.88-4.16 2.19s-3.77-4.6-4.64-6.4a25.5 25.5 0 01-2.08-17.4 18 18 0 013.62-7.14c1.12-1.26 4.47-3.74 6-3.31a2.41 2.41 0 002.33-4z"/>
        </clipPath>
        <clipPath id="w">
          <path d="M51 222.67c-4.89 10.86-5.29 24-5.73 35.77a305.59 305.59 0 00.6 37.8 468.82 468.82 0 0012.95 74.66c.94 3.7 5.72 7 9.56 5.43 8.55-3.58 10.43-11.6 12.13-20q2.74-13.6 4.24-27.42c1-9.32 1.63-18.72 2.18-28.08.58-10.08 0-20.16.42-30.22h-7.8c-2 17.5.15 36.41 3 53.73 2.81 16.82 6.75 35.6 17.45 49.3 1.87 2.4 6.32 2.71 8.76 1.13 9-5.8 9-18 9.65-27.53q1.35-20 1.77-40.13c.53-26.79.45-53.72-1.07-80.48-.31-5.6-9.15-5.58-8.72 0 1.85 23.85 2.79 47.75 1.48 71.65-.65 11.78-1.51 23.56-2.84 35.28-.68 6-1.41 12-2.28 18-.36 2.52-.58 9.29-3.56 10l8.89 5c-2.66-8-6.5-15.61-9.24-23.62a201.11 201.11 0 01-6.35-23.4c-3.49-16.52-4.59-33.83-9.32-50-1.18-4.05-8.1-3.5-7.66 1 1.59 16.1-.36 33.78-3.38 49.6q-2.3 12-5.52 23.7-1.47 5.42-3.16 10.76c-.5 1.57-1.27 6-3.24 6.68l9.56 5.43a692.7 692.7 0 01-9-71.5c-.91-12-2.12-23.89-2.93-35.86-.8-11.7-.49-24.75-4.36-35.88-.9-2.59-5.15-3.88-6.51-.86z"/>
        </clipPath>
        <clipPath id="o2">
          <path d="M146.78 322.3c-.31-8-10.38-4.9-14.12-1.68-5.64 4.86-9 12.37-9.91 19.65-1.59 12.47 3.89 35.58 20.64 33.93 7.5-.75 12.76-7.42 15.12-14.1 3-8.45 1.8-18 .64-26.71-.7-5.27-2.33-14.08-9-15-5.91-.83-8.59 6.35-7.52 11.14 1.63 7.38 10.13 9.83 16.36 6.72 7.82-3.9 13.16-14.17 14.3-22.55.43-3.17-3.47-5.3-5.4-2.28-3.15 5-4.39 11-8.4 15.48-1.82 2-4.88 4.49-7.87 3.76a4.94 4.94 0 01-3-2.31 4.48 4.48 0 01-.58-3.14q-.18-3.58 4.79.82c1.27 2 .74 6 .78 8.28.06 3.05.1 6.13-.14 9.17-.46 5.78-1.85 12.62-6.28 16.74-8.36 7.77-11.85-8.39-11.81-14.24.07-8 2.38-17.41 9.93-21.19a2.81 2.81 0 001.42-2.48z"/>
        </clipPath>
        <clipPath id="r">
          <path d="M173.66 318.84l1.26-1.49c2.51-3-2.65-6-4-2.33-1.84 5-3.76 10.14-1 15.2C172.56 335 178 336.43 183 335c12-3.59 17.34-17.62 17.21-28.88-.06-5-8.14-6.52-9.06-1.23-1.84 10.5-4.43 20.77-5.74 31.4-.62 5.07-1.3 10.23-1.62 15.32-.32 4.9 1.36 10.3 3.47 14.71a2.5 2.5 0 004.29 0c1.79-3.88 3.55-8.5 3.83-12.79.34-5.09.11-10.22.48-15.33.73-10.17 1.54-21 4.18-30.86l-8.89-2.45A50.37 50.37 0 01183 321c-1.17 1.49-3.78 5-5.86 3.53-1.73-1.25-1.59-7-1.56-8.87l-4.46 1.21 1 1.78a1 1 0 001.48.19z"/>
        </clipPath>
        <clipPath id="l3">
          <path d="M190.66 357c13.57-18.65 17.92-42.72 21.09-65.08 1.64-11.63 3.13-23.28 4.92-34.89.8-5.15 1.84-10.27 2.58-15.43.6-4.14.42-8.5 2-12.43 1-2.49-3-4-4.24-1.79-2.19 3.8-2.35 8.27-2.79 12.55-.41 4-1 8-1.45 12.05-.81 7.33-1.84 14.62-2.62 22-1.11 10.56-2.53 21.09-3.84 31.63-2.29 18.47-4.94 36.75-.94 55.22 1.45 6.72 12.55 7 13.83 0 3.33-18.17 2.93-36.83 3.82-55.22.5-10.55.79-21.07 1-31.63.14-7.34-.15-14.61-.33-22-.1-4-.4-8-.55-12.05-.15-4.26-.14-8.69-2.1-12.55l-4.24 1.79c3.27 8.51-.75 19.67-2.09 28.22-1.78 11.29-3.23 22.62-5.33 33.86A249.75 249.75 0 01188 355.42a1.55 1.55 0 002.67 1.56z"/>
        </clipPath>
        <clipPath id="d">
          <path d="M213.85 362.22c15.3-13.94 28.22-30.81 45.32-42.74 1.67-1.17.71-4.33-1.49-3.53-11.7 4.21-22 11.66-26.75 23.57a33.5 33.5 0 00-1.79 19.39c1.17 5.43 3.78 12.14 10.08 12.83 6.15.69 11.5-4.51 15.23-8.75 4.61-5.23 8-11.39 11-17.66a123.76 123.76 0 0011.47-42.43c1.48-16.8-.09-33.55-6-49.35-1.54-4.08-8.28-3.87-8.09 1.09.51 12.7-.81 25.66-1.44 38.34l-1.88 38.35c-.47 9.57-3.29 22.8 2.11 31.47 7.37 11.82 18 1.58 24.79-4.82 3.78-3.55-1.2-10.26-5.63-7.29-2 1.34-4.07 2.61-6 4-1.1.81-3.16 3.38-4.5 3-2.67-.76-1.66-10.7-1.61-12.64q.39-14.74.67-29.49l.62-29.5c.22-10.42 0-21.09 1.1-31.46l-8.08 1.09c5 28 3.6 56.24-7.26 82.71a83.94 83.94 0 01-9.31 17.31c-1.39 1.93-4.44 7-7.18 5.78-2.24-1-2.85-8.13-2.92-10-.56-14.55 11.07-25.55 22.9-32l-2.34-3C241.46 330.65 224 343.3 212.31 361c-.64 1 .75 1.92 1.54 1.19z"/>
        </clipPath>
        <clipPath id="ecLine">
          <path d="M297.68 207.82c2.33 9.35 3 19.15 3.85 28.72q1.44 15.56 2.54 31.14c1.44 20.29 4 40.51 4.54 60.85.14 5.06 7.9 5.09 7.88 0-.09-20.61 1.31-41.16.62-61.77-.34-10.09-.8-20.16-1.47-30.22-.67-10.27-2-20.61-1.85-30.9.16-11.76-19.06-9.72-16.11 2.18z"/>
        </clipPath>
        <clipPath id="ecDot">
          <path d="M312.78 357.12a8.06 8.06 0 004.23-2.36 7.91 7.91 0 001.62-8.55 7.76 7.76 0 00-7.15-4.81 8.17 8.17 0 00-6.76 3.87 8 8 0 001.22 9.49 7.45 7.45 0 006.84 2.36z"/>
        </clipPath>
      </g>

      <g fill="none" stroke="#333" strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10">
        <g strokeWidth="20">
          <path clipPath="url(#h1)" className="path" d="M.39,61.83C17.12,83,43,21.76,34,4.64L15.64,211.11" />
        </g>
        <g strokeWidth="24">
          <path clipPath="url(#h2)" className="path" d="M2.86,127.65C67.66,138,83.75,47.72,87.72.09,76.46,64.2,49.05,137,68.75,200"/>
        </g>
        <g strokeWidth="25">
          <path clipPath="url(#e)" className="path"  d="M93.55,175.05c26.64,8.23,34.21-58.79-1.18-24.63-21.29,55.49,26.73,58.25,39.87,7.09"/>
        </g>
        <g strokeWidth="20">
          <path clipPath="url(#l1)" className="path" d="M142.49,53.46c2.89,35.6-12.26,98.72-3.28,141.12"/>
        </g>
        <g strokeWidth="30">
          <path clipPath="url(#l2)" className="path" d="M142.15,195.62c3.07-1.17,4.36-4.72,5.29-7.87,12.39-41.92,24.91-85,21.18-128.58.6,31.58-22.25,202.15,24.51,101.81" />
        </g>
        <g strokeWidth="25">
          <path clipPath="url(#o1)" className="path" d="M210.53,149.15c-48.17,7.11,12.86,89.81,18.2,5.49-30.42-36.12-25,45.47,17-5.48" />
        </g>
        <g strokeWidth="28">
          <path clipPath="url(#w)" className="path"  d="M50.34,221.52c-6.71,83.91,20.93,233.29,29.35,46.13,21,183.5,41.3,43.47,31.34-44"/>
        </g>
        <g strokeWidth="22">
          <path clipPath="url(#o2)" className="path" d="M140.88,320.35c-18.07-5.77-21.83,39.45-4.47,44.76,19,3.76,24.19-45.53,7.55-47.17-9.22,24.31,23.31,9.18,22.75-8"/>
        </g>
        <g strokeWidth="20">
          <path clipPath="url(#r)" className="path"  d="M169.22,315.23c-4.81,25,22.16,7.28,22.61-12.11a257.88,257.88,0,0,0-6.18,58.95"/>
        </g>
        <g strokeWidth="15">
          <path clipPath="url(#l3)" className="path" d="M185.56,353.25c22.08-39.14,24.26-82.58,29.65-127.67-2,76-7.46,87.15-6.74,130.32"/>
        </g>
        <g strokeWidth="22">
          <path clipPath="url(#d)" className="path" d="M209.39,358.57a328.8,328.8,0,0,1,45-43.71c-20.36,1.49-40.3,53.55-12.51,46.54,26.25-28.57,31-73.27,21.22-109.71,5,18.11-21,135.16,16.18,100.06"/>
        </g>
        <g strokeWidth="20">
          <path clipPath="url(#ecLine)" className="path" d="M301.21,197.58c5,40,7,86.55,7.57,128"/>
        </g>
        <g strokeWidth="24">
          <path clipPath="url(#ecDot)" className="path" d="M307.71,353.18v-6.91"/>
        </g>
      </g>
    </svg>
  );
}

export default HelloSVG;
