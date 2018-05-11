import React from 'react';

const NotificationsEmpty = () => (
  <div className="notifications-empty">
    <div className="top-text">There’s nothing here yet!</div>
    <div className="illustration">
      <svg xmlns="http://www.w3.org/2000/svg" width="248" height="248" viewBox="0 0 248 248">
        <g fill="none" fillRule="nonzero">
          <path fill="#4698C9" d="M248 124a123.535 123.535 0 0 1-10.178 49.28C218.762 217.248 174.974 248 124 248a125.23 125.23 0 0 1-17.05-1.162C46.536 238.535 0 186.703 0 124 0 55.516 55.516 0 124 0c68.484 0 124 55.516 124 124z" />
          <path fill="#357297" d="M50.153 173.414l20.574 20.806 40.873-9.873-50.013-22.734z" />
          <path fill="#4E4E4E" d="M116.55 72.054a.837.837 0 0 1-.197.409.79.79 0 0 0 .217.175v-.052c.073-.361 3.364-17.142 6.67-35.939 1.881-12.813 3.782-26.567 4.852-36.575l-1.23-.036c-2.562 24.005-9.93 69.647-10.312 72.018zM118.198 72.907a.811.811 0 0 1-.191.382c.119.138.28.233.46.269h.16c.395 0 .734-.28.81-.667.487-2.459 9.389-47.838 12.4-72.653-.407 0-.815-.057-1.229-.078-2.991 24.816-11.925 70.282-12.41 72.747z" />
          <path fill="#FDFDFD" d="M115.599 72.736h.134a.816.816 0 0 0 .62-.284.832.832 0 0 1-.196-.677c.093-.578 7.657-47.435 10.282-71.754h-1.24c-2.62 24.314-10.189 71.191-10.282 71.77a.827.827 0 0 0 .682.945z" />
          <path fill="#FDFDFD" d="M126.862.036h-.423c-2.625 24.32-10.189 71.176-10.282 71.755a.832.832 0 0 0 .196.677.837.837 0 0 0 .197-.409c.382-2.376 7.75-48.018 10.312-72.023zM117.8 72.054a.832.832 0 0 1-.816.693h-.135a.8.8 0 0 1-.268-.099.827.827 0 0 0 .656.92h.16a.816.816 0 0 0 .62-.284.827.827 0 0 1-.191-.703c.119-.604 9.3-47.43 12.4-72.431-.408 0-.822-.031-1.235-.047-1.25 10.101-3.498 23.767-5.74 36.539-2.64 17.939-5.24 34.028-5.451 35.412z" />
          <path fill="#FDFDFD" d="M118.198 72.907c.486-2.465 9.403-47.931 12.43-72.731L130.2.155c-3.1 25.002-12.286 71.817-12.4 72.431a.827.827 0 0 0 .191.703.811.811 0 0 0 .207-.382z" />
          <path fill="#4E4E4E" d="M142.435 1.364l.372 37.686a.827.827 0 0 0 .826.837.827.827 0 0 0 .817-.837l-.3-29.528c-.269-2.94-.553-5.683-.858-8.024l-.857-.134zM147.767 38.192v.083c.022.44.385.786.826.785h.042a.832.832 0 0 0 .785-.868c-.057-1.147-1.168-23.674-2.718-36.11a96.457 96.457 0 0 0-1.69-.3c1.566 12.37 2.698 35.253 2.755 36.41z" />
          <path fill="#FDFDFD" d="M141.98 39.887a.827.827 0 0 0 .816-.832l-.372-37.691c-.553-.083-1.105-.155-1.658-.233l.377 37.94a.827.827 0 0 0 .837.816zM144.088 1.627l.062 7.895c1.152 12.57 1.938 28.52 1.948 28.753.022.44.386.786.826.785h.042a.827.827 0 0 0 .8-.827c-.066-1.322-1.224-24.36-2.769-36.435l-.909-.17zM116.973 72.747a.832.832 0 0 0 .817-.693c.222-1.384 2.82-17.473 5.456-35.407a2064.642 2064.642 0 0 1-6.67 35.94v.051a.8.8 0 0 0 .268.098l.13.01zM142.435 1.364l.446 37.69v-.004z" />
          <path fill="#FDFDFD" d="M143.308 1.498c.305 2.33.589 5.084.858 8.024l-.078-7.895-.78-.129zM145.013 1.782c1.55 12.075 2.702 35.134 2.77 36.436-.073-1.183-1.205-24.067-2.77-36.436z" />
          <path fill="#357297" d="M237.822 173.28C218.762 217.248 174.974 248 124 248a125.23 125.23 0 0 1-17.05-1.162L57.453 197.16l75.64-128.96 104.729 105.08z" />
          <path fill="#357297" d="M248 124a123.902 123.902 0 0 1-57.407 104.62l-57.965-57.965 29.399-133.042L248 124z" />
          <path fill="#357297" d="M237.822 173.28C218.762 217.248 174.974 248 124 248a125.23 125.23 0 0 1-17.05-1.162L57.453 197.16l75.64-128.96 104.729 105.08z" />
          <path fill="#C94343" d="M128.547 124c-.14 2.976 0 8.375.196 14.57.372 11.883.889 26.707-.196 32.958-1.245 7.14-2.015 12.183-3.028 16.172-.083.325-.165.64-.248.95 0 .249.052.517.072.744a.145.145 0 0 1 0 .047c0 .217.036.429.047.646.01.217.03.6.041.899.026.935 0 1.875-.062 2.805a27.704 27.704 0 0 1-2.79 10.298 49.357 49.357 0 0 1-10.953 5.053 56.704 56.704 0 0 1-36.415-.636 45.715 45.715 0 0 1-17.732-11.429l-.387-.418a48.262 48.262 0 0 1-.295-10.82 45.983 45.983 0 0 1 2.263-10.968c.093-.274-.18-.408-.45-.315-3.228 1.105-3.616.692-5.858.026-5.26-1.55-5.529-6.484-6.05-10.907-.414-5.374.413-8.68.413-8.68 2.81-17.939 13.242-34.834 25.988-46.614 2.18-3.374 9.145-10.426 9.145-10.426a9.047 9.047 0 0 1 4.31.403 78.477 78.477 0 0 1 29.02-10.168 79.567 79.567 0 0 1 19.67-.31l-2.16 18.342s-4.128 9.098-4.541 17.778z" />
          <rect width="20.925" height="14.88" x="86.779" y="61.831" fill="#BB453E" rx="7.44" transform="rotate(7.42 97.242 69.271)" />
          <path fill="#973232" d="M88.303 97.836a4.95 4.95 0 0 1-.273 1.276 7.078 7.078 0 0 1-.517 1.142 9.3 9.3 0 0 1-1.55 1.896 23.183 23.183 0 0 1-1.72 1.772 14.24 14.24 0 0 1-1.938 1.55.083.083 0 0 1-.109-.025.088.088 0 0 1 0-.099 18.083 18.083 0 0 0 1.457-1.922c.455-.661.89-1.333 1.318-2.01.362-.716.79-1.397 1.276-2.035a7.714 7.714 0 0 1 1.922-1.617.083.083 0 0 1 .119.03c.01.012.016.027.016.042zM70.267 145.08s2.893-6.2 6.2-8.68c3.306-2.48 7.026 2.893 4.96 6.2-2.067 3.307-6.614-1.24-7.027 3.307-.413 4.546-.827 7.44-1.24 7.853-.413.413.827-5.787-2.893-8.68z" />
          <rect width="20.925" height="14.88" x="119.438" y="68.026" fill="#BB453E" rx="7.44" transform="rotate(10.27 129.9 75.466)" />
          <path fill="#C94343" d="M88.867 66.547S86.8 66.133 85.56 74.4c-1.24 8.267-2.893 17.36-3.72 18.6a4.893 4.893 0 0 0-.413 4.133c.413 1.24 46.706 4.134 47.946 6.2a6.324 6.324 0 0 1 .827 4.134s11.987-15.294 5.373-32.24l-46.706-8.68z" />
          <path fill="#973232" d="M90.06 67.647s17.928-.517 14.343 5.043c-3.586 5.56-5.379 18.135-4.934 21.183.444 3.048-10.752 4.531-12.1.517-1.35-4.015 2.691-26.743 2.691-26.743z" />
          <path fill="#D46969" d="M89.776 67.244s-1.08 14.467-3.23 19.437c-2.149 4.97-3.482 10.437-.717 8.784 2.764-1.654 4.056-3.24 4.908-9.502.853-6.262 4.066-24.418-.961-18.719z" />
          <path fill="#973232" d="M135.02 78.688a161.892 161.892 0 0 0-47.998-9.754c-1.033-.047-1.767-1.41-1.653-3.064.114-1.648 1.08-2.95 2.139-2.899a167.85 167.85 0 0 1 49.6 10.132c.945.346 1.209 1.876.61 3.41-.584 1.535-1.788 2.506-2.697 2.175z" />
          <path fill="#FFF" d="M135.553 76.245a161.572 161.572 0 0 0-47.999-9.766 1.757 1.757 0 0 1-1.736-1.823 1.876 1.876 0 0 1 2.015-1.659 165.06 165.06 0 0 1 48.944 9.982 1.73 1.73 0 0 1 1.034 2.253 1.777 1.777 0 0 1-2.258 1.013z" />
          <path fill="#D46969" d="M70.68 144.253s5.487 4.532 2.48 10.334c-2.335 4.495-3.937 4.815-2.893 14.053 0 0 .826 5.787-2.067 10.333-3.617 5.684-9.507 7.854-10.333 7.44-.827-.413 2.066-12.4 2.066-12.4s1.24-.826 3.307-4.96c2.108-4.236 6.2-23.56 7.44-24.8z" />
          <path fill="#DD8787" d="M138.348 101.106a52.7 52.7 0 0 1-.274 5.451 96.388 96.388 0 0 1-.651 5.353 57.076 57.076 0 0 1-1.033 5.265c-.424 1.741-.863 3.477-1.214 5.228-.352 1.752-.708 3.509-1.034 5.27l-.49 2.64-.445 2.646c-.6 3.529-1.07 7.083-1.338 10.664a.155.155 0 0 1-.166.145.16.16 0 0 1-.144-.15l-.109-2.707v-2.713c0-.91.042-1.803.073-2.707a79.39 79.39 0 0 1 .129-2.713l.196-2.702.243-2.702c.191-1.793.393-3.591.625-5.379l.646-5.389a45.498 45.498 0 0 1 1.033-5.316 63.133 63.133 0 0 1 1.55-5.198 37.985 37.985 0 0 1 2.108-5.063.155.155 0 0 1 .212-.067.15.15 0 0 1 .083.144z" />
          <path fill="#DDD" d="M72.333 173.187c1.72-8.613 6.293-16.689 9.068-25.017 2.154-6.459 4.309-17.36-5.337-11.465-7.337 4.484-10.22 13.831-12.194 21.54-1.27 4.954-1.901 16.833-10.669 13.149-12.663-5.332 4.877-39.54 9.817-45.865 5.683-7.295 13.676-12.7 21.555-17.339 3.245-1.917 9.75-3.39 8.448-8.163 8.51 1.317 18.248 1.653 26.386 4.443 7.145 2.449 4.588 3.865 4.133 12.198-1.25 22.264-2.067 44.95-1.509 67.208-14.006-10.436-33.666-12.482-49.961-6.742a17.18 17.18 0 0 1 .263-3.947z" />
          <rect width="9.093" height="2.067" x="96.301" y="134.747" fill="#4E4E4E" rx="1.033" transform="rotate(7.67 100.847 135.78)" />
          <rect width="13.495" height="2.067" x="96.044" y="125.456" fill="#4E4E4E" rx="1.033" transform="rotate(-28.03 102.792 126.489)" />
          <rect width="13.495" height="2.067" x="96.041" y="125.856" fill="#4E4E4E" rx="1.033" transform="rotate(50.15 102.789 126.89)" />
          <rect width="13.495" height="2.067" x="98.937" y="112.641" fill="#4E4E4E" rx="1.033" transform="rotate(-28.03 105.685 113.674)" />
          <path fill="#4E4E4E" d="M113.243 106.154l-8.649-1.105a1.002 1.002 0 0 1-.703-1.132c.042-.563.43-.981.858-.93l8.649 1.111c.487.145.79.63.703 1.132-.042.563-.434.981-.858.924z" />
          <path fill="#4E4E4E" d="M107.983 108.221l-6.629-5.683a.997.997 0 0 1 .026-1.328.889.889 0 0 1 1.23-.31l6.629 5.683c.325.385.325.948 0 1.333a.883.883 0 0 1-1.256.305z" />
          <rect width="13.495" height="2.067" x="98.935" y="111.808" fill="#4E4E4E" rx="1.033" transform="rotate(50.15 105.683 112.841)" />
          <path fill="#7F7F7F" d="M106.252 102.383c1.15.203 2.296.418 3.436.645a163.06 163.06 0 0 1-5.812 27.9 1.25 1.25 0 0 1-1.576.822l-.925-.294a1.276 1.276 0 0 1-.832-1.581 159.36 159.36 0 0 0 5.71-27.492z" />
          <rect width="9.093" height="2.067" x="96.304" y="134.338" fill="#FDFDFD" rx="1.033" transform="rotate(7.67 100.85 135.371)" />
          <rect width="13.495" height="2.067" x="96.046" y="125.044" fill="#FDFDFD" rx="1.033" transform="rotate(-28.03 102.794 126.078)" />
          <rect width="13.495" height="2.067" x="96.038" y="125.446" fill="#FDFDFD" rx="1.033" transform="rotate(50.15 102.786 126.48)" />
          <rect width="13.495" height="2.067" x="98.939" y="112.23" fill="#FDFDFD" rx="1.033" transform="rotate(-28.03 105.687 113.263)" />
          <path fill="#FDFDFD" d="M113.243 105.741l-8.649-1.106a1.002 1.002 0 0 1-.703-1.131c.042-.563.43-.982.858-.93l8.649 1.11c.487.145.79.631.703 1.132-.042.584-.434.982-.858.925z" />
          <path fill="#FDFDFD" d="M107.983 107.808l-6.629-5.684a.997.997 0 0 1 .026-1.328.889.889 0 0 1 1.23-.31l6.629 5.684c.325.385.325.948 0 1.333a.884.884 0 0 1-1.256.305z" />
          <rect width="13.495" height="2.067" x="98.932" y="111.393" fill="#FDFDFD" rx="1.033" transform="rotate(50.15 105.68 112.426)" />
          <path fill="#973232" d="M130.2 108.572a161.458 161.458 0 0 0-48.174-8.638 1.276 1.276 0 0 1-1.281-1.287c.044-1.054.096-2.11.155-3.167.07-.728.706-1.27 1.436-1.225 16.944.45 33.72 3.475 49.755 8.97a1.25 1.25 0 0 1 .796 1.607c-.345.992-.703 1.984-1.075 2.976a1.271 1.271 0 0 1-1.612.764z" />
          <path fill="#DDD" d="M130.774 106.51a161.2 161.2 0 0 0-48.48-8.752 1.266 1.266 0 0 1-1.275-1.286c0-.325.03-.651.04-.976a1.349 1.349 0 0 1 1.422-1.225 164.708 164.708 0 0 1 49.455 8.954 1.26 1.26 0 0 1 .785 1.612c-.108.3-.222.604-.33.91-.236.657-.96.999-1.617.764z" />
          <path fill="#357297" d="M170.076 125.767c-1.42-.186-6.034.274-8.463 13.113-2.893 15.293-5.786 21.08-10.746 21.08-4.056 0-7.544-1.178-8.913-2.03 1.287-.088 3.126-1.158 5.534-4.77 4.83-7.233 7.94-17.122 8.106-17.654 2.682-6.293 7.75-16.26 9.946-16.26 2.78 0 4.092 1.892 4.536 6.521z" opacity=".8" />
          <path fill="#4C1919" d="M133.615 101.783l-.517 4.433s-4.133 9.094-4.546 17.774c-.14 2.976 0 8.375.196 14.57.372 11.883.889 26.706-.196 32.958-1.276 7.326-2.067 12.446-3.1 16.487a25.916 25.916 0 0 0-3.462-5.167l.47-44.154c.285-7.373.651-14.73 1.034-22.041.367-6.52 2.015-8.784-.708-10.67 0-.067 0-.129-.036-.19a20.935 20.935 0 0 1-.377-4.02c-.047-4.134.645-9.3 1.58-14.322.967-5.224 2.517-11.419 2.517-13.072 0-1.653 2.893-6.613 2.893-6.613l7.027 1.24c4.143 10.664.165 26.84-2.775 32.787z" opacity=".6" />
          <path fill="#C94343" d="M190.392 113.098l.155.083s-6.82-16.668-12.194-24.108c-5.373-7.44-7.853-17.36-7.853-17.36-4.505-1.606-29.104 3.07-29.481 3.013-.867.15-1.721.362-2.558.635a10.7 10.7 0 0 0-1.632.672 5.999 5.999 0 0 0-1.442 1.033c-.077.078-.155.16-.227.243.479 2.453.755 4.941.827 7.44 0 2.144-3.736 23.927-6.17 41.287-1.286 9.212-2.21 17.179-2.01 20.31l-.066.274a10.623 10.623 0 0 0-.228 2.195 10.483 10.483 0 0 0 3.235 7.59 19.297 19.297 0 0 0-.548 4.588 19.514 19.514 0 0 0 1.602 7.781 19.752 19.752 0 0 0 9.248 9.786 35.577 35.577 0 0 0 6.22 2.744c16.53 5.454 34.586-1.774 42.786-17.128a63.596 63.596 0 0 0 3.777-11.336 64.547 64.547 0 0 0-3.452-39.742h.01zM144.31 156.86h-.29c.047-.041.517-.33 1.034-.64a18.373 18.373 0 0 0 2.45-3.049 46.93 46.93 0 0 0 1.833-3.002.604.604 0 0 0 .026-.057l.269-.552c.124-.254.248-.517.377-.801l.305-.656c.083-.171.165-.352.248-.517.584-1.292 1.24-2.795 1.953-4.51.191-.46.382-.936.584-1.421a.279.279 0 0 1 0-.057c.268-.672.547-1.38.826-2.103.476-1.22.972-2.511 1.478-3.896l.041.372c.109.982.393 3.761.465 6.252v2.159c.075.514.113 1.032.114 1.55v.28c-.162 5.927-5.014 10.647-10.943 10.648h-.77z" />
          <path fill="#973232" d="M170.076 125.767c-1.42-.186-6.034.274-8.463 13.113-2.893 15.293-5.786 21.08-10.746 21.08-4.056 0-7.544-1.178-8.913-2.03a4.366 4.366 0 0 0 2.356-1.07h1.287c.175 0 .351 0 .516-.041h.357c.232-.026.465-.062.692-.104l.424-.098c.11-.02.219-.048.325-.082.124-.026.248-.068.372-.104.124-.036.259-.083.388-.129h.036l.18-.067h.063l.263-.104.274-.118.166-.073c.113-.051.227-.103.335-.165l.12-.057.242-.201.326-.186c.14-.083.28-.17.418-.264.108-.067.212-.144.315-.217l.186-.134.17-.13a6.08 6.08 0 0 0 .285-.227l.217-.186c.057-.046.114-.103.175-.15l.192-.18.34-.341.233-.254.062-.067c.046-.047.09-.097.13-.15a1.09 1.09 0 0 0 .097-.118l.031-.031.114-.14.176-.227c.049-.06.094-.121.134-.186l.093-.124c.031-.042.057-.088.083-.13a7.16 7.16 0 0 0 .253-.387c.083-.134.114-.186.165-.279.052-.093.057-.093.083-.14.026-.046.134-.242.196-.366 0 0 .026-.041.036-.067.063-.13.124-.264.181-.393a.573.573 0 0 0 .047-.098c.048-.1.09-.198.124-.295a.098.098 0 0 0 0-.036c.035-.074.066-.15.093-.227.052-.14.103-.28.15-.424a.29.29 0 0 1 0-.062c.041-.134.082-.263.118-.403.037-.14.094-.34.13-.517.036-.175.062-.268.082-.403l.042-.211.062-.434v-.047c.044-.351.07-.705.077-1.059v-.279a10.943 10.943 0 0 0-.114-1.55c.031-.615.026-1.307 0-2.03v-.13c-.072-2.49-.356-5.27-.465-6.251.078-.238.125-.383.14-.44 2.681-6.292 7.75-16.259 9.946-16.259 2.847-.041 4.159 1.85 4.603 6.479z" />
          <path fill="#C94343" d="M167.25 72.778l-.796.294-.676.233c-.734.253-1.473.516-2.227.733a82.253 82.253 0 0 1-17.417 3.385c-.723.067-1.452.113-2.17.154-.579.037-1.162.063-1.736.083h-.827c-.987.031-1.968.031-2.94 0h-.955a4.604 4.604 0 0 1-3.018-1.359 6.717 6.717 0 0 1-1.906-4.619 81.23 81.23 0 0 0-2.764-19.116c-.517-1.814-1.488-5.017-.59-6.49.212-.357.469-.686.765-.976.451-.457.996-.81 1.597-1.034 1.741-.645 3.942-1.23 5.766-1.756 7.833-2.248 17.127-2.119 25.048-1.902h.997c.365.015.726.077 1.075.186.413.124.392.305.754.517 1.602 1.034.982 1.84 1.033 4.004.16 6.48 2.325 14.147 4.005 20.372.8 2.956-.357 6.273-3.018 7.29zM162.078 150.81l.393.285-.656-.471c.088.062.175.13.263.186z" />
          <path fill="#973232" d="M195.088 145.638a64.067 64.067 0 0 1-5.022 18.538 35.8 35.8 0 0 1-36.864 18.538c20.58-1.841 37.56-16.872 41.886-37.076zM169.911 70.194a1.271 1.271 0 0 0-1.199-.423l-26.577 5.094c-.258-.889-.18-1.767.878-2.118 0 0 5.787-11.574 20.667-7.854 0 0-10.22-21.7-5.11-24.087a9.01 9.01 0 0 1 1.292-.475l2.542.062h.997c.364.02.725.082 1.075.186.413.124.392.31.754.553 1.602 1.033.982 1.834 1.033 3.999.16 6.479 2.325 14.146 4.005 20.372a6.96 6.96 0 0 1-.357 4.691z" />
          <path fill="#D46969" d="M131.027 47.947s3.72 14.053 3.306 19.426c-.413 5.374-.826 8.267 1.24 5.787 2.067-2.48 3.72-1.653 2.48-7.853-1.24-6.2-4.133-24.387-7.026-17.36zM163.06 156.653a17.975 17.975 0 0 1-31.258 12.121 19.514 19.514 0 0 1-1.602-7.78c-.003-1.552.18-3.097.548-4.604a10.53 10.53 0 0 0 9.672 2.681 8.954 8.954 0 0 1 .733 3.576v.036a9.099 9.099 0 0 0 12.814 3.033c.201-.135.392-.269.583-.419h.031a17.97 17.97 0 0 0 7.234-14.41v-.243-.594c.098.248.191.517.279.75a17.97 17.97 0 0 1 .966 5.853z" />
          <path fill="#973232" d="M195.507 138.26c.003 4.908-.555 9.8-1.664 14.58a61.571 61.571 0 0 1-1.948 6.717c-3.725-5.477.651-20.889-.517-32.23-1.24-11.986-17.36-21.08-20.253-27.28-2.893-6.2-13.226-24.8-11.987-26.453 1.085-1.447 9.46-1.312 11.527-1.25.636 2.258 3.1 10.405 7.694 16.75 5.373 7.44 12.193 24.108 12.193 24.108l-.155-.083a64.067 64.067 0 0 1 5.11 25.141z" />
          <path fill="#C94343" d="M162.078 150.81l.393.285-.656-.471c.088.062.175.13.263.186zM163.649 40.155a4.913 4.913 0 0 0-1.075-.175h-.17a86.402 86.402 0 0 0-24.221 2.945c-1.824.516-3.617 1.033-5.353 1.643a4.474 4.474 0 0 0-1.597.986 4.36 4.36 0 0 0-.764.915l-.243-1.793a4.133 4.133 0 0 1 3.539-4.65l25.213-3.43a4.133 4.133 0 0 1 4.65 3.534l.021.025z" />
          <path fill="#DD8787" d="M144.94 134.685c.63-2.067 1.344-4.092 2.016-6.138l1.033-3.049 1.121-3.048c.372-1.033.687-2.04 1.033-3.064.336-1.02.763-2.007 1.276-2.95a28.458 28.458 0 0 1 1.71-2.764 17.21 17.21 0 0 1 2.155-2.584.165.165 0 0 1 .233 0c.034.03.052.074.046.12a17.701 17.701 0 0 1-.429 3.322 28.479 28.479 0 0 1-.873 3.125 17.815 17.815 0 0 1-1.307 2.94c-.517.94-1.07 1.876-1.55 2.826l-1.483 2.863-1.55 2.841c-1.033 1.881-2.067 3.777-3.151 5.642a.155.155 0 0 1-.212.057.15.15 0 0 1-.068-.14z" />
          <path fill="#973232" d="M164.998 43.746a117.578 117.578 0 0 0-34.674 5.44c-.661.212-1.504-.516-1.891-1.648-.382-1.12-.145-2.216.548-2.438a122.078 122.078 0 0 1 35.872-5.684c.754 0 1.4.956 1.426 2.145.026 1.214-.553 2.18-1.281 2.185zM169.983 73.739a115.403 115.403 0 0 0-33.371 6.045 1.596 1.596 0 0 1-2.02-.961l-.326-.894a1.55 1.55 0 0 1 .992-2.01 119.598 119.598 0 0 1 34.472-6.272 1.695 1.695 0 0 1 1.803 1.524c0 .32.031.635.042.956a1.586 1.586 0 0 1-1.592 1.612z" />
          <path fill="#FFF" d="M164.693 41.917a117.567 117.567 0 0 0-34.669 5.534 1.276 1.276 0 0 1-1.601-.796 1.25 1.25 0 0 1 .816-1.591 120.073 120.073 0 0 1 35.376-5.684 1.328 1.328 0 0 1 1.38 1.245 1.271 1.271 0 0 1-1.302 1.292zM147.4 153.295a18.445 18.445 0 0 1-2.361 2.914l-.724.646h1.287c.175 0 .351 0 .517-.041l.31-.037h.046c.233-.025.465-.062.692-.103l.424-.098c.11-.02.219-.048.326-.083.124-.026.248-.067.371-.103.124-.036.259-.083.388-.13h.036l.181-.066h.062l.263-.104.274-.119.166-.072c.113-.052.227-.103.336-.165l.118-.057.238-.16.326-.186c.14-.083.28-.17.418-.264.108-.067.212-.144.315-.217l.186-.134.17-.13a6.08 6.08 0 0 0 .285-.227l.217-.186c.057-.046.114-.103.175-.15l.192-.18.34-.341.233-.254.062-.067c.046-.047.09-.097.13-.15a1.09 1.09 0 0 0 .097-.118l.031-.031.114-.14.176-.227c.049-.06.094-.121.134-.186a2.77 2.77 0 0 0 .176-.253 7.16 7.16 0 0 0 .253-.388c.083-.134.114-.186.165-.279.052-.093.057-.093.083-.14.026-.046.134-.242.196-.366 0 0 .026-.041.036-.067.063-.13.124-.264.181-.393a.573.573 0 0 0 .047-.098c.048-.1.09-.198.124-.295a.098.098 0 0 0 0-.036c.035-.074.066-.15.093-.227.052-.14.103-.28.15-.424.051-.155.098-.305.14-.465.04-.16.092-.34.128-.517.036-.175.062-.268.083-.403l.041-.211c0-.099.031-.202.042-.3a10.762 10.762 0 0 1-8.49 5.828z" />
          <path fill="#DDD" d="M155.92 147.426a1.21 1.21 0 0 0 0-.135v-.046c.044-.352.07-.705.077-1.06v-.278a10.943 10.943 0 0 0-.114-1.55c0-.067 0-.135-.03-.197a8.122 8.122 0 0 0-3.126-1.074 71.502 71.502 0 0 1-3.41 7.063 45.536 45.536 0 0 1-1.835 3.001c0 .047-.056.088-.087.135a10.762 10.762 0 0 0 8.525-5.86z" />
          <path fill="#D46969" d="M159.547 73.16c0-.413 4.133 0 4.133 0s6.2 14.467 5.373 18.6c0 0-9.506-16.947-9.506-18.6z" />
          <path fill="#F1CFCF" d="M172.98 125.033c.589 2.682.987 5.394 1.307 8.107.17 1.359.28 2.723.403 4.082.124 1.358.186 2.727.264 4.097.118 2.733.15 5.476 0 8.22a34.503 34.503 0 0 1-1.168 8.148c.145-2.739.052-5.44-.047-8.159-.061-1.353-.087-2.712-.17-4.07-.083-1.36-.108-2.713-.18-4.072l-.182-4.071c-.036-1.364-.118-2.723-.144-4.087-.067-2.723-.13-5.451-.083-8.195z" />
          <path fill="#DD8787" d="M167.4 158.307c.351-2.96.418-5.916.48-8.877.063-2.96.063-5.916.052-8.876l-.067-8.887-.067-4.443c0-.744-.036-1.483-.057-2.222a25.542 25.542 0 0 0-.145-2.195 3.369 3.369 0 0 0-.175-.801 1.4 1.4 0 0 0-.419-.656.713.713 0 0 0-.734-.073 2.47 2.47 0 0 0-.723.465 2.49 2.49 0 0 1 .672-.573.889.889 0 0 1 .92-.026c.266.18.475.433.604.728.134.278.235.572.3.874.356 1.461.61 2.946.76 4.443.175 1.483.304 2.97.407 4.459.191 2.976.285 5.957.264 8.938a80.69 80.69 0 0 1-.114 4.474c-.083 1.488-.16 2.982-.31 4.47a40.874 40.874 0 0 1-1.648 8.778z" />
          <path fill="#DDD" d="M170.138 72.153a115.697 115.697 0 0 0-34.255 6.236 1.276 1.276 0 0 1-1.617-.76 1.25 1.25 0 0 1 .786-1.607 118.28 118.28 0 0 1 34.931-6.386c.727-.042 1.355.5 1.421 1.225a1.271 1.271 0 0 1-1.266 1.291z" />
          <path fill="#973232" d="M117.165 207.008a52.483 52.483 0 0 1-5.534 2.144 56.704 56.704 0 0 1-36.415-.636 45.715 45.715 0 0 1-17.732-11.428c.9-2.305 3.483-5.338 10.716-6.541 9.6-1.602 32.591-1.344 40.718 4.36 5.575 3.906 8.246 12.1 8.246 12.1z" />
          <path fill="#D46969" d="M106.433 193.673a185.83 185.83 0 0 0-31.325-3.374c-4.8-.052-5.637-2.661-2.584-6.03 3.049-3.358 7.296-5.916 10.179-5.57a158.952 158.952 0 0 1 21.55 3.896c3.942.997 9.016 4.65 10.576 7.75 1.56 3.147-2.51 4.438-8.396 3.328z" />
        </g>
      </svg>
    </div>
    <div className="quote">
      “Silence is golden <br /> when you can’t think of a good answer”
    </div>
    <div className="quote-author">Muhammad Ali</div>
  </div>
);

export default NotificationsEmpty;
