export interface SpeedQualityItem {
  title: string;
  paragraphs?: string[];
  paralist?: string[];
}

export interface SpeedQualityData {
  title: string;
  items: SpeedQualityItem[];
  imageSrc?: string;
  imageAlt?: string;
  svgCode?: string;
}

export const speedQualityData: SpeedQualityData = {
  title: "Speed, Quality, and Scalability",
  items: [
    {
      title: "Speed",
      paragraphs: [
        "Fast access to pre-qualified talent through technology staffing solutions.",
        "We enable rapid team deployment without compromising on technical precision. Through structured screening, role-specific validation, and a continuously evolving talent pipeline, organizations can onboard the right professionals faster while maintaining consistency in quality and long-term scalability across projects.",
      ]
      
    },
    {
      title: "Quality",
      paragraphs: [
        "Strong technical validation and screening processes.",
        "We ensure every candidate meets defined technical benchmarks through multi-layered evaluation, practical assessments, and domain-specific validation. This structured approach minimizes hiring risks, improves delivery outcomes, and ensures that talent aligns seamlessly with both technical environments and business expectations."
      ]
    },
    {
      title: "Scalability",
      paragraphs: [
        "Flexible scaling through IT staff augmentation services.",
        "Our staffing approach is designed to scale with evolving project demands, enabling organizations to expand or optimize teams without operational disruption. With access to a diverse talent pool and flexible engagement models, businesses can maintain momentum while adapting to changing workloads and growth requirements.",
        "Additional strengths:"
      ],

       paralist: [
        "Reliable technology staffing services across roles and domains",
        "Experience as a structured IT staffing company",
        "Consistent delivery aligned with business and technical needs",
        "Ability to scale teams without operational disruption"
      ],
    }
  ],
  imageAlt: "Speed, Quality, Scalability",
  svgCode: `<svg width="100%" height="auto" viewBox="0 0 481 450" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M212.972 265.259C209.311 266.081 202.662 267.5 197.992 268.472C182.005 271.871 158.882 279.94 158.882 282.181C158.882 284.422 155.707 286.365 147.9 289.428C143.567 290.884 143.417 290.884 145.92 288.12C147.265 286.514 148.908 283.264 149.581 280.873L150.589 276.353L141.923 279.753C123.955 286.514 98.666 299.924 87.0113 308.964C80.3622 313.97 71.0235 320.918 66.2047 324.28C56.7166 331.041 55.708 332.834 50.8892 350.727C41.5879 386.065 47.2285 427.192 63.7019 444.002C69.3425 449.642 70.5379 450.128 78.4944 449.979C85.6292 449.642 88.3188 448.671 95.9765 443.031C108.789 433.655 142.707 411.092 162.505 398.989C171.994 393.349 184.134 385.766 189.625 382.366C200.757 375.269 237.701 363.315 258.171 360.103C279.949 356.704 309.907 363.017 321.562 373.663C326.904 378.519 331.536 387.521 333.889 397.719L335.72 406.273L337.401 399.811C339.38 391.406 337.737 365.295 334.412 353.006C329.07 333.17 318.424 311.878 307.965 300.746C304.454 296.861 289.997 289.951 277.857 286.066C274.196 284.945 269.714 282.666 267.697 281.06C265.866 279.267 258.731 276.876 251.895 275.42C231.089 271.385 229.445 270.078 239.27 266.044C244.424 263.802 244.275 263.802 232.135 263.802C225.299 263.802 216.67 264.437 213.009 265.259H212.972Z" fill="#DFDBCC"/>
<path d="M186.139 225.806C187.596 222.369 190.285 216.093 192.228 211.76C198.765 196.818 205.638 173.285 203.808 171.977C201.977 170.67 202.239 166.972 204.293 158.829C205.638 154.458 205.713 154.346 206.497 157.969C207.02 159.987 208.701 163.236 210.27 165.179L213.371 168.616L215.649 159.613C220.58 141.048 224.428 112.695 223.83 97.9776C223.643 89.6475 223.419 78.0301 223.456 72.1654C223.456 60.5107 222.597 58.6803 210.831 44.3361C187.521 16.1332 150.764 -3.21657 127.529 0.444197C119.647 1.75162 118.564 2.424 114.044 8.99845C110.159 15.0126 109.375 17.7395 109.524 27.2276C109.674 43.1034 108.329 83.8201 106.648 106.98C105.714 117.962 104.818 132.269 104.407 138.694C103.697 151.881 91.9302 188.862 82.6288 207.39C72.6925 227.076 50.1675 247.77 34.74 251.058C27.7173 252.589 17.6315 251.095 8.03128 247.098L0 243.624L4.2958 248.742C9.97373 255.241 32.1998 269.1 44.0787 273.545C63.3164 280.755 86.8499 284.49 101.979 282.436C107.171 281.838 121.216 274.105 131.452 266.485C134.515 264.169 138.96 261.816 141.425 261.143C143.928 260.695 150.054 256.287 155.209 251.581C170.599 237.012 172.617 236.415 170.189 246.724C169.031 252.216 169.105 252.104 176.203 242.204C180.162 236.639 184.682 229.242 186.139 225.806Z" fill="url(#paint0_radial_150_7600)"/>
<path d="M250.355 227.112C252.858 229.913 257.415 234.956 260.553 238.542C271.386 250.757 289.839 266.857 291.782 265.736C293.724 264.616 296.974 266.409 303.511 271.676C306.91 274.702 306.985 274.851 303.362 274.067C301.307 273.693 297.684 273.842 295.256 274.477L290.848 275.86L298.057 281.724C312.812 293.977 336.981 309.367 350.578 315.007C358.198 318.332 368.845 323.001 374.186 325.504C384.758 330.398 386.812 330.398 404.743 325.728C440.08 316.352 473.027 291.1 479.49 268.501C481.619 260.806 481.432 259.536 477.36 252.662C473.55 246.611 471.383 244.78 462.68 240.895C448.224 234.396 411.803 216.055 391.519 204.811C381.919 199.357 369.33 192.558 363.69 189.458C351.998 183.294 323.384 157.071 310.459 140.859C296.75 123.601 287.411 94.4273 290.922 79.0745C292.491 72.0518 298.057 63.5349 305.752 56.4748L312.289 50.6475L305.864 52.4031C297.572 54.8312 275.682 69.1754 266.679 78.1406C252.073 92.5596 238.812 112.358 234.293 126.963C232.649 131.932 233.77 147.919 236.422 160.396C237.244 164.131 237.505 169.174 237.094 171.677C236.459 174.142 237.879 181.576 240.008 188.225C246.769 208.285 246.47 210.377 238.103 203.84C233.583 200.478 233.657 200.627 239.672 211.161C243.034 217.1 247.89 224.31 250.392 227.074L250.355 227.112Z" fill="#DFDBCC"/>
<defs>
<radialGradient id="paint0_radial_150_7600" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(111.946 141.498) rotate(-44.5119) scale(103.615 81.9747)">
<stop stop-color="#FAB931"/>
<stop offset="1" stop-color="#D54B26"/>
</radialGradient>
</defs>
</svg>`
};
