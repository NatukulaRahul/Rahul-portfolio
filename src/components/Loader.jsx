// import { Html, useProgress } from "@react-three/drei";

// const CanvasLoader = () => {
//   const { progress } = useProgress();
//   return (
//     <Html
//       as='div'
//       center
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "column",
//       }}
//     >
//       <span className='canvas-loader'></span>
//       <p
//         style={{
//           fontSize: 12,
//           color: "#F1F1F1",
//           fontWeight: 800,
//           marginTop: 40,
//         }}
//       >
//         {progress.toFixed(2)}%
//       </p>
//     </Html>
//   );
// };

// export default CanvasLoader;

import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh", // Full screen height to center the loader vertically
        background: "rgba(0, 0, 0, 0.7)", // Dark transparent background
        borderRadius: "10px", // Rounded corners
      }}
    >
      {/* Progress bar */}
      <div
        style={{
          width: "100px",
          height: "8px",
          backgroundColor: "#ddd",
          borderRadius: "5px",
          overflow: "hidden",
          marginBottom: "20px", // Space between progress bar and text
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "#F1F1F1",
            borderRadius: "5px",
            transition: "width 0.3s ease-out",
          }}
        />
      </div>

      {/* Loader Text */}
      <p
        style={{
          fontSize: "24px", // Larger text size
          color: "#F1F1F1",
          fontWeight: "bold",
          marginBottom: "10px",
          letterSpacing: "2px",
          fontFamily: "Arial, sans-serif", // Modern font
        }}
      >
        Loading...
      </p>

      {/* Percentage */}
      <p
        style={{
          fontSize: "18px",
          color: "#F1F1F1",
          fontWeight: 600,
          marginTop: "10px",
          fontFamily: "Arial, sans-serif", // Modern font
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;