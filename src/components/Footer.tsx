const Footer = () => {
  return (
    <div className="bg-[#232127]">
      <div className="container flex md:flex-row flex-col pt-[72px] pb-[70px]">
        <a href="" className="md:mr-[260px] mr-auto ml-auto md:ml-0">
          <img src="./logo-dark.svg" alt="" className="" />
        </a>
        <div className="flex md:flex-row flex-col gap-[80px] md:mr-[100px]">
          <div className="flex flex-col self-center text-center">
            <h4 className="text-white font-semibold text-[16px] mb-[22px] md:mt-0 mt-10">
              Features
            </h4>
            <a
              href="#"
              className=" hover:text-[#2BD0D0] text-[var(--grey-color)] font-medium text-[15px] mb-[10px]"
            >
              Link Shortening
            </a>
            <a
              href="#"
              className="hover:text-[#2BD0D0] text-[var(--grey-color)] font-medium text-[15px] mb-[10px]"
            >
              Branded Links
            </a>
            <a
              href="#"
              className=" hover:text-[#2BD0D0] text-[var(--grey-color)] font-medium text-[15px]"
            >
              Analytics
            </a>
          </div>
          <div className="flex flex-col self-center text-center">
            <h4 className="text-white font-semibold text-[16px] mb-[22px]">
              Resources
            </h4>
            <a
              href="#"
              className=" hover:text-[#2BD0D0] text-[var(--grey-color)] font-medium text-[15px] mb-[10px]"
            >
              Blog
            </a>
            <a
              href="#"
              className=" hover:text-[#2BD0D0] text-[var(--grey-color)] font-medium text-[15px] mb-[10px]"
            >
              Developers
            </a>
            <a
              href="#"
              className="hover:text-[#2BD0D0] text-[var(--grey-color)] font-medium text-[15px]"
            >
              Support
            </a>
          </div>
          <div className="flex flex-col self-center text-center">
            <h4 className="text-white font-semibold text-[16px] mb-[22px]">
              Company
            </h4>
            <a
              href="#"
              className="hover:text-[#2BD0D0] text-[var(--grey-color)] font-medium text-[15px] mb-[10px]"
            >
              About
            </a>
            <a
              href="#"
              className="hover:text-[#2BD0D0] text-[var(--grey-color)] font-medium text-[15px] mb-[10px]"
            >
              Our Team
            </a>
            <a
              href="#"
              className="hover:text-[#2BD0D0] text-[var(--grey-color)] font-medium text-[15px] mb-[10px]"
            >
              Careers
            </a>
            <a
              href="#"
              className=" hover:text-[#2BD0D0] text-[var(--grey-color)] font-medium text-[15px]"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-5 md:self-start self-center md:mt-0 mt-10">
          {/* Facebook */}
          <a href="" className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.676C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.313 14.713 3.625 17.479 3.625C18.804 3.625 19.942 3.724 20.274 3.768V7.008L18.356 7.009C16.852 7.009 16.561 7.724 16.561 8.772V11.085H20.148L19.681 14.707H16.561V24H22.677C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0Z"
                fill="white"
              />
            </svg>
          </a>
          {/* Twitter */}
          <a href="" className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="28"
              viewBox="0 0 32 28"
              fill="none"
            >
              <g filter="url(#filter0_d_0_986)">
                <path
                  d="M28 2.55699C27.117 2.94899 26.168 3.21299 25.172 3.33199C26.189 2.72299 26.97 1.75799 27.337 0.607986C26.386 1.17199 25.332 1.58199 24.21 1.80299C23.313 0.845986 22.032 0.247986 20.616 0.247986C17.437 0.247986 15.101 3.21399 15.819 6.29299C11.728 6.08799 8.1 4.12799 5.671 1.14899C4.381 3.36199 5.002 6.25699 7.194 7.72299C6.388 7.69699 5.628 7.47599 4.965 7.10699C4.911 9.38799 6.546 11.522 8.914 11.997C8.221 12.185 7.462 12.229 6.69 12.081C7.316 14.037 9.134 15.46 11.29 15.5C9.22 17.123 6.612 17.848 4 17.54C6.179 18.937 8.768 19.752 11.548 19.752C20.69 19.752 25.855 12.031 25.543 5.10599C26.505 4.41099 27.34 3.54399 28 2.55699Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_0_986"
                  x="0"
                  y="0.247986"
                  width="32"
                  height="27.504"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_0_986"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_0_986"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </a>
          {/* Pinterest */}
          <a href="" className="">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 0C5.373 0 0 5.372 0 12C0 17.084 3.163 21.426 7.627 23.174C7.522 22.225 7.427 20.769 7.669 19.733C7.887 18.796 9.076 13.768 9.076 13.768C9.076 13.768 8.717 13.049 8.717 11.986C8.717 10.318 9.684 9.072 10.888 9.072C11.911 9.072 12.406 9.841 12.406 10.762C12.406 11.791 11.751 13.33 11.412 14.757C11.129 15.951 12.011 16.926 13.189 16.926C15.322 16.926 16.961 14.677 16.961 11.431C16.961 8.558 14.897 6.549 11.949 6.549C8.535 6.549 6.531 9.11 6.531 11.756C6.531 12.787 6.928 13.894 7.424 14.494C7.522 14.613 7.536 14.718 7.507 14.839L7.174 16.199C7.121 16.419 7 16.466 6.772 16.36C5.273 15.662 4.336 13.471 4.336 11.711C4.336 7.926 7.086 4.449 12.265 4.449C16.428 4.449 19.663 7.416 19.663 11.38C19.663 15.516 17.056 18.844 13.436 18.844C12.22 18.844 11.077 18.213 10.686 17.466L9.938 20.319C9.667 21.362 8.936 22.669 8.446 23.465C9.57 23.812 10.763 24 12 24C18.627 24 24 18.627 24 12C24 5.372 18.627 0 12 0Z"
                fill="white"
              />
            </svg>
          </a>
          {/* Instagram */}
          <a href="" className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0ZM12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM5.838 12C5.838 8.597 8.597 5.838 12 5.838C15.403 5.838 18.162 8.597 18.162 12C18.162 15.404 15.403 18.163 12 18.163C8.597 18.163 5.838 15.403 5.838 12ZM12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16ZM16.965 5.595C16.965 4.8 17.61 4.155 18.406 4.155C19.201 4.155 19.845 4.8 19.845 5.595C19.845 6.39 19.201 7.035 18.406 7.035C17.61 7.035 16.965 6.39 16.965 5.595Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
