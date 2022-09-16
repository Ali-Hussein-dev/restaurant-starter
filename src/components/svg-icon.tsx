import * as React from "react";

//=======================
export const SvgIcon = ({
  name,
}: {
  name: "halal" | "vegan" | "vegi" | "spicy" | null;
}) => {
  switch (name) {
    case "halal":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 110 100"
          xmlSpace="preserve"
        >
          <g fill="">
            <path d="m90.78 20.7-35-19.22a11.94 11.94 0 0 0-11.55 0l-35 19.21A12 12 0 0 0 3 31.21V68.8A12 12 0 0 0 9.22 79.3l35 19.22a11.98 11.98 0 0 0 11.55 0l35-19.21A12 12 0 0 0 97 68.79V31.2a12 12 0 0 0-6.22-10.52zM93 68.78a8 8 0 0 1-4.15 7l-35 19.22a7.97 7.97 0 0 1-7.7 0l-35-19.21A8 8 0 0 1 7 68.79V31.2a8 8 0 0 1 4.15-7l35-19.22a8 8 0 0 1 7.7 0l35 19.21A8 8 0 0 1 93 31.21V68.8z" />
            <path d="M49.9 12c-20.95 0-38 17.05-38 38s17.05 38 38 38 38-17.05 38-38-17.04-38-38-38zm0 72c-18.74 0-34-15.25-34-34s15.26-34 34-34c18.75 0 34 15.25 34 34s-15.25 34-34 34z" />
            <path d="M72.09 32.45a2 2 0 0 0-.51 2.78A26.09 26.09 0 0 1 50.1 76.06c-14.37 0-26.06-11.7-26.06-26.06S35.74 23.94 50.1 23.94c5.7 0 11.11 1.8 15.65 5.22a2 2 0 0 0 2.4-3.2 29.8 29.8 0 0 0-18.05-6.02c-16.57 0-30.05 13.48-30.05 30.06S33.53 80.06 50.1 80.06a30.1 30.1 0 0 0 24.76-47.1 2 2 0 0 0-2.78-.51z" />
            <path d="M45.13 59.97c.14 0 .29-.01.43-.05 3.06-.68 5.55-3.27 7.4-7.68l.13-.32a11.35 11.35 0 0 0 3.61 5.79c2.1 1.68 4.15 2.24 6.47 1.76 2.04-.42 3.78-1.5 5.4-2.57l.26-.18c1.3-.86 2.53-1.68 3.81-2.07a2 2 0 0 0-.23-3.88c-.59-.1-1.91-1.3-2.7-2.02-.9-.8-1.75-1.57-2.63-2.06a6.13 6.13 0 0 0-7.85 1.82 2 2 0 1 0 3.25 2.32c.58-.8 1.82-1.1 2.66-.64.48.26 1.2.9 1.89 1.54l.9.8-1.31.86-.26.17c-1.34.9-2.66 1.72-4 1.99-.98.2-1.81.11-3.15-.96a7.39 7.39 0 0 1-1.98-2.9c-1.34-3.67-1.33-7.89-1.18-11.16a2 2 0 0 0-3.98-.34 39.82 39.82 0 0 1-2.8 10.5c-1.32 3.15-2.86 4.95-4.58 5.33a2 2 0 0 0 .44 3.95z" />
            <path d="M45.35 48.68a2 2 0 0 0 3.91-.83 7.77 7.77 0 0 0-4.25-5.17 2 2 0 1 0-1.65 3.65c1.58.71 1.98 2.3 2 2.35zM30 47.43a2 2 0 0 0-2.73.75c-2.39 4.2-1.17 7.66.77 9.49 1.4 1.31 3.25 1.99 5.13 1.99 1.47 0 2.96-.41 4.25-1.25 2.27-1.47 7.05-6.37 2.28-20.07a2 2 0 1 0-3.78 1.31c3.13 9 1.7 13.86-.67 15.4a3.7 3.7 0 0 1-4.46-.29c-1.12-1.05-1.13-2.69-.04-4.6a2 2 0 0 0-.75-2.73z" />
          </g>
        </svg>
      );
    case "vegan":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 110 100"
          xmlSpace="preserve"
        >
          <g fill="">
            <path d="m90.7 20.7-35-19.2c-3.6-2-7.9-2-11.5 0l-35 19.2A12 12 0 0 0 3 31.2v37.6a12 12 0 0 0 6.2 10.5l35 19.2c1.8 1 3.8 1.5 5.8 1.5s4-.5 5.7-1.5l35-19.2a12 12 0 0 0 6.2-10.5V31.2a12 12 0 0 0-6.2-10.5zM93 68.8c0 2.9-1.6 5.6-4.2 7L53.8 95a8.09 8.09 0 0 1-7.7 0l-35-19.2a8.07 8.07 0 0 1-4.1-7V31.2c0-2.9 1.5-5.6 4.1-7L46.1 5c1.3-.7 2.6-1 3.9-1s2.6.3 3.8 1l35 19.2c2.6 1.4 4.2 4.1 4.2 7v37.6z" />
            <path d="M43.98 44.22c-.28-.32-.57-.63-.88-.92-6.9-6.8-17.7-6.8-18.1-6.8a2 2 0 0 0-2 2c0 .4 0 11.1 6.8 17.9C32.4 59 36 61 40.3 62.1a7.34 7.34 0 0 0 4.67-.4l.03.3v10.45A22.84 22.84 0 0 1 28.6 58.4c-.4-1-1.6-1.5-2.6-1.1-1 .4-1.5 1.6-1.1 2.6a26.74 26.74 0 0 0 21.3 16.83 1.98 1.98 0 0 0 1.18.13A27.01 27.01 0 0 0 77 50c0-1.4-.1-2.8-.3-4.2-.2-1.1-1.2-1.9-2.3-1.7-1.1.2-1.9 1.2-1.7 2.3A23 23 0 0 1 50 73c-.34 0-.67-.02-1-.04V56.8c.12-.67.15-1.36.08-2.06.96.36 1.96.57 3.02.57.8 0 1.5-.1 2.3-.2 5.7-1.5 10.3-4 13.8-7.5 8.9-9 8.9-23.1 8.9-23.7a2 2 0 0 0-2-2c-.6 0-14.8 0-23.7 8.9-3.44 3.34-5.91 7.85-7.42 13.42zM41.3 58.2c-3.6-1-6.6-2.6-8.7-4.7-4-3.9-5.2-9.8-5.5-12.9 3.1.4 9.1 1.5 13 5.5 1.84 1.84 3.3 4.3 4.3 7.32a39.62 39.62 0 0 0-6.3-5.12c-1-.6-2.2-.4-2.8.6-.6 1-.3 2.2.6 2.8a32.92 32.92 0 0 1 7.26 6.36c-.58.26-1.24.33-1.86.14zM72.9 26c-.3 4-1.7 12.8-7.6 18.7-3 3-7 5.2-12 6.5-.9.3-1.78.26-2.63-.02C55.35 42.23 61.9 38.9 62 38.9c.9-.5 1.4-1.7.9-2.7s-1.7-1.5-2.7-1c-.34.17-7.24 3.57-12.49 12.83L47.7 48c-.2-.8-.2-1.6 0-2.4 1.4-5 3.5-9 6.5-12 5.8-5.8 14.7-7.2 18.7-7.6z" />
            <path d="M33.6 34c4.4-4.5 10.2-7 16.5-7 1.1 0 2-.9 2-2s-.9-2-2-2c-7.4 0-14.3 2.9-19.4 8.2-.8.8-.8 2 0 2.8.4.4.9.6 1.4.6s1-.2 1.5-.6z" />
            <path d="M79.4 32.6a2 2 0 0 0-.9 2.7A32.1 32.1 0 0 1 50 82c-17.6 0-32-14.4-32-32a32.1 32.1 0 0 1 44.5-29.5c1 .4 2.2-.1 2.6-1.1.4-1-.1-2.2-1.1-2.6C59.6 15 54.9 14 50 14c-19.9 0-36 16.1-36 36s16.1 36 36 36 36-16.1 36.1-36c0-5.7-1.4-11.4-4-16.5a2 2 0 0 0-2.7-.9z" />
          </g>
        </svg>
      );
    case "vegi":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 110 100"
          xmlSpace="preserve"
        >
          <g fill="">
            <path d="m90.7 20.7-35-19.2c-3.6-2-7.9-2-11.5 0l-35 19.2A12 12 0 0 0 3 31.2v37.6a12 12 0 0 0 6.2 10.5l35 19.2c1.8 1 3.8 1.5 5.8 1.5s4-.5 5.7-1.5l35-19.2a12 12 0 0 0 6.2-10.5V31.2a12 12 0 0 0-6.2-10.5zM93 68.8c0 2.9-1.6 5.6-4.2 7L53.8 95a8.09 8.09 0 0 1-7.7 0l-35-19.2a8.07 8.07 0 0 1-4.1-7V31.2c0-2.9 1.5-5.6 4.1-7L46.1 5c1.3-.7 2.6-1 3.9-1s2.6.3 3.8 1l35 19.2c2.6 1.4 4.2 4.1 4.2 7v37.6z" />
            <path d="M26.7 40.6c-1-.3-2.2.2-2.5 1.3-.8 2.6-1.2 5.3-1.2 8.1a27 27 0 0 0 14.4 23.9c.3.1.6.2.9.2.7 0 1.4-.4 1.7-1.1.5-1 .2-2.2-.8-2.7C31.7 66.3 27 58.5 27 50c0-2.4.4-4.7 1-6.9.3-1-.2-2.2-1.3-2.5zM73 50c0 11.8-9.2 21.9-21 22.9-1.1.1-2 1.1-1.9 2.2.1 1 1 1.8 2 1.8h.2C66.1 75.7 77 63.9 77 50c0-1.1-.9-2-2-2s-2 .9-2 2zM50 23.1c-6.4 0-12.5 2.2-17.4 6.3-.8.7-.9 2-.2 2.8.4.5.9.7 1.5.7.5 0 .9-.2 1.3-.4 4.8-4 11-5.9 17.2-5.3 1.1.1 2.1-.7 2.2-1.8.1-1.1-.7-2.1-1.8-2.2-1-.1-1.9-.1-2.8-.1z" />
            <path d="M82.1 38.6a2 2 0 0 0-1.4 2.5C81.6 44 82 47 82 50c0 17.6-14.4 32-32 32S18 67.6 18 50c0-6.06 1.71-11.75 4.67-16.6C38.69 40.97 43.5 76.32 43.5 76.7c.1 1 1 1.7 2 1.7 1.1 0 1.9-.9 1.9-2 .55-10.76 2.64-18.59 5.3-24.3a8.63 8.63 0 0 0 4.4 1.2c.6 0 1.2 0 1.9-.2 5.9-1.3 10.8-3.6 14.6-7 9.9-8.8 9.1-21.8 9.1-22.4-.1-.9-.7-1.6-1.6-1.8-.6-.2-13.9-2.9-23.8 6-3.7 3.4-6.6 8-8.5 13.8-.5 1.5-.6 3.1-.3 4.6.24 1.03.67 2 1.23 2.9A56.03 56.03 0 0 0 45 63.6c-2.99-11.57-8.94-27.85-19.97-33.55A31.98 31.98 0 0 1 50 18c3.2 0 6.4.4 9.5 1.4 1 .3 2.2-.2 2.5-1.3.3-1.1-.2-2.2-1.3-2.5-3.4-1.1-7-1.6-10.7-1.6-19.9 0-36 16.1-36 36s16.1 36 36 36a35.98 35.98 0 0 0 34.6-46 2 2 0 0 0-2.5-1.4zM52.5 43c1.7-5.1 4.2-9.2 7.4-12.1 5.2-4.6 11.6-5.5 15.8-5.5 1.2 0 2.2.1 3 .2-.2 3.5-1.3 11.7-7.8 17.6-3.2 2.9-7.6 4.9-12.8 6a4.8 4.8 0 0 1-3.56-.57C60.45 38.72 67.9 37.13 68.4 37c1.1-.2 1.8-1.2 1.6-2.3-.2-1.1-1.2-1.8-2.3-1.6-.56.07-8.7 1.69-15.41 11.7-.06-.6 0-1.23.21-1.8z" />
          </g>
        </svg>
      );
    case "spicy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 110 100"
          xmlSpace="preserve"
        >
          <g fill="">
            <path d="m90.78 20.7-35-19.22a11.95 11.95 0 0 0-11.55 0l-35 19.21A12 12 0 0 0 3 31.21V68.8A12 12 0 0 0 9.22 79.3l35 19.22a11.98 11.98 0 0 0 11.55 0l35-19.21A12 12 0 0 0 97 68.79V31.2a12 12 0 0 0-6.22-10.52zM93 68.78a8 8 0 0 1-4.15 7l-35 19.22a7.97 7.97 0 0 1-7.7 0l-35-19.21A8 8 0 0 1 7 68.79V31.2a8 8 0 0 1 4.15-7l35-19.22a8 8 0 0 1 7.7 0l35 19.21A8 8 0 0 1 93 31.21V68.8z" />
            <path d="M74.06 70.78c-.58-1.76-2.4-1.79-4.02-1.8-.8-.02-1.7-.03-2.67-.15-.04 0-3.48-.44-7.32-2.84-4.78-2.97-6.79-8.04-7.87-10.76-1.58-3.98-1.78-6.91-1.94-9.27l-.06-.73c.21-.2.38-.45.5-.72.39-.82.34-1.8-.12-2.9-.98-2.32-4-5.48-7.7-6.88.8-4.63 2.03-6.36 2.58-6.63.04-.02.16-.08.54.13.94.5 2.05.55 3.05.12a3.62 3.62 0 0 0 2.04-2.42l.52-2.04c.46-1.82-.21-3.5-1.71-4.28-2.94-1.53-6.22-1.67-8.77-.4-4.43 2.22-5.78 6.37-6.76 9.4l-.25.76c-.34 1.01-.6 2.51-.7 4.02a4.56 4.56 0 0 1-1.76 3.27c-3.2 2.55-5.76 6.96-4.3 9.64.13.24.29.45.45.62l-.01.05C26.05 56.8 30.76 68 39.24 74.24A28.15 28.15 0 0 0 56 79.56c4.76 0 9.22-1.1 12.63-2.84 6.33-3.2 5.7-5.12 5.44-5.94zm-39.93-31a8.63 8.63 0 0 0 3.26-6.12c.08-1.15.28-2.34.5-3.03l.27-.8c.89-2.74 1.8-5.58 4.73-7.04 1.33-.66 3.1-.59 4.8.2l-.37 1.45a4.3 4.3 0 0 0-3.64.07c-2.3 1.12-3.92 4.44-4.82 9.86a3.66 3.66 0 0 0 2.41 4.04c2.13.75 3.8 2.26 4.76 3.46-1.62.98-3.4 1.73-5.3 2.19-3.79.9-7.13.5-9.27 0-.15-.04-.3-.05-.45-.06a9.52 9.52 0 0 1 3.12-4.22zm32.68 33.38c-4.56 2.3-15.68 4.83-25.2-2.15-8.31-6.1-10.96-15.98-9.96-22.83a24.56 24.56 0 0 0 10.02-.23 22.7 22.7 0 0 0 4.58-1.66c.17 2.5.42 5.89 2.21 10.4 1.17 2.94 3.58 9.03 9.48 12.7a24.15 24.15 0 0 0 9.44 3.47l-.57.3z" />
          </g>
        </svg>
      );
    default:
      return null;
  }
};