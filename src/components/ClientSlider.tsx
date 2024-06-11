import React, { FC, useEffect, useRef, useState } from "react";
import aramark from "../assets/images/home/aramark-logo.png";
import clipPath from "../assets/images/home/clip_path_group.png";
import dell from "../assets/images/home/dell_tm_1.png";
import deloitte from "../assets/images/home/deloitte-1-1-1.png";
import uber from "../assets/images/home/uber-2-1-1.png";
import vector from "../assets/images/home/Vector-2.png";
import whiteVerific from "../assets/images/home/white-verific0-1.png";
import path12 from "../assets/images/home/path12.png";
import vector11 from "../assets/images/home/Vector-1-1.png";

interface Props {}

const ClientSlider: FC<Props> = () => {
  const clientSliderRef = useRef<HTMLUListElement>(null);
  const [rotating, setRotating] = useState(true);
  const clientspeed = 600;

  useEffect(() => {
    const clientSlider = clientSliderRef.current;
    if (!clientSlider) return;

    const clients = clientSlider.children.length;
    const clientWidth = clients * 220;
    clientSlider.style.width = `${clientWidth}px`;

    const intervalId = setInterval(() => {
      if (rotating) {
        rotateClients();
      }
    }, clientspeed);

    return () => clearInterval(intervalId);
  }, [rotating]);

  const rotateClients = () => {
    const clientSlider = clientSliderRef.current;
    if (!clientSlider) return;

    const firstChild = clientSlider.querySelector(
      "li:first-child"
    ) as HTMLElement;
    if (firstChild) {
      firstChild.style.transition = "margin-left 1s ease-in-out";
      firstChild.style.marginLeft = "-220px";
      firstChild.addEventListener(
        "transitionend",
        () => {
          clientSlider.appendChild(firstChild);
          firstChild.style.transition = "";
          firstChild.style.marginLeft = "0px";
        },
        { once: true }
      );
    }
  };

  const handleMouseEnter = () => setRotating(false);
  const handleMouseLeave = () => setRotating(true);
  return (
    <>
      <div
        id="ourclients"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="clients-wrap">
          <ul id="clientlogo" className="clearfix" ref={clientSliderRef}>
            <li>
              <img src={aramark} alt="Logo" />
            </li>
            <li>
              <img src={clipPath} alt="Logo" />
            </li>
            <li>
              <img src={dell} alt="Logo" />
            </li>
            <li>
              <img src={deloitte} alt="Logo" />
            </li>
            <li>
              <img src={uber} alt="Logo" />
            </li>
            <li>
              <img src={vector} alt="Logo" />
            </li>
            <li>
              <img src={whiteVerific} alt="Logo" />
            </li>
            <li>
              <img src={path12} alt="Logo" />
            </li>
            <li>
              <img src={vector11} alt="Logo" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ClientSlider;
