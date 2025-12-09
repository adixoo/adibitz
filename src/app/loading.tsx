export default function Loading() {
  return (
    <div className="bg-background fixed inset-0 z-1000 flex items-center justify-center">
      <svg className="loader" viewBox="0 0 40 40" height="40" width="40">
        <circle
          className="track"
          cx="20"
          cy="20"
          r="17.5"
          pathLength="100"
          strokeWidth="5px"
          fill="none"
        />
        <circle
          className="car"
          cx="20"
          cy="20"
          r="17.5"
          pathLength="100"
          strokeWidth="5px"
          fill="none"
        />
      </svg>
    </div>
  );
}
