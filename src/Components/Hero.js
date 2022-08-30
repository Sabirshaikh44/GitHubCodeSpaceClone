import React, { useEffect, useRef,useState } from 'react';
import "./Hero.css";
function Hero() {
    const [toogle, setToogle] = useState(false);
    const [middleImageToogled, setMiddleImageToogled] = useState('false');
    const toogleHandler = () => {
        setToogle(prev => !prev);
        setMiddleImageToogled(prevImgToogled => !prevImgToogled);

    }

    // IntersectionObserver implementation : for Animation support
    const Option = {
        root: null,
        rootMargin: "-60px 0px",
        threshold: 0,
      };
    const Ref = useRef();
    const [allPictureSectionVisible, setAllPictureSectionVisible] = useState();
     useEffect(()=>{
        const observer =  new IntersectionObserver((entries)=>{
            const entry = entries[0];
            setAllPictureSectionVisible(entry.isIntersecting);
            // console.log(entry);
        },Option);
        observer.observe(Ref.current);
     },[])

  
    return (
        <div className="hero">
            <h1 className="heroBoldBigText">
                Blazing fast cloud
                developer environments
            </h1>
            <h3 className="heroGrayText">
                Visual Studio Code backed by high performance VMs that start in seconds.
            </h3>
            <button className={`hero__getStartedBtn`} ref={Ref} >Get started
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z" /></svg>
            </button>

            <div className="hero__toogleBtnsection">
                <h3 className="hero__toogleBtnsectionRightText">Desktop</h3>
                <i className={`fa-solid fa-toggle-${toogle ? "on" : "off"} toogleBtnIcon`} onClick={toogleHandler}></i>
                <h3 className="hero_toogleBtnsectionleftText">Browser</h3>
            </div>

            <div className={`allPictureSection ${allPictureSectionVisible ? "allPictureSectionVisible" :"allPictureSectionNotVisible"}`} ref={Ref}>

                <div className="allPictureSectionLeft">
                    <div className="allPictureSectionLeft__firstBox">

                    </div>

                    <div className="allPictureSectionLeft__SecondBox">

                        <p className="allPictureSectionLeft__SecondBoxPara">CPUs up to</p>
                        <h3 className="allPictureSectionLeft__SecondBoxColorText">32 <span> cores</span></h3>
                    </div>

                    <div className="allPictureSectionLeft__thirdBox">
                        <img src="https://github.githubassets.com/images/modules/site/codespaces/illo-hero-icons.png" alt="" />
                    </div>
                    <div className="allPictureSectionLeft__fourthBox">
                        <img src="https://github.githubassets.com/images/modules/site/codespaces/illo-hero-debugger.png" alt="" />
                    </div>
                    <div className="allPictureSectionLeft__fifthBox">
                        <div className="allPictureSectionLeft__fifthBoxFirstBox"></div>
                        <div className="allPictureSection__fifthBoxSecondBox">
                            <img src="https://github.githubassets.com/images/modules/site/codespaces/illo-hero-vscode.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="allPictureSectionMiddle">
                    <div className="allPictureSectionMiddle__FirstBox">
                        <img src={`${middleImageToogled ? "https://github.githubassets.com/images/modules/site/codespaces/illo-codespaces-desktop.webp" : "https://github.githubassets.com/images/modules/site/codespaces/illo-codespaces.png"}`} alt="" />
                    </div>
                    <div className="allPictureSectionMiddle__SecondBox">
                        <div className="allPictureSectionMiddle__SecondBoxFirstSplitImgBox">
                            <div className="allPictureSectionMiddle__SecondBoxFirstSplitImgBoxFirstImgContainer">
                                <img src="https://github.githubassets.com/images/modules/site/codespaces/illo-hero-stats.png" alt="" />
                            </div>
                            <div className="allPictureSectionMiddle__SecondBoxFirstSplitImgBoxSecondImgContainer">
                                <img src="https://github.githubassets.com/images/modules/site/codespaces/illo-hero-tabs.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="allPictureSectionMiddle__ThirdBox">
                        <div className="allPictureSectionMiddle__ThirdBoxFirstBox">
                            <img src="https://github.githubassets.com/images/modules/site/codespaces/illo-hero-bugs.png" alt="" />
                        </div>
                        <div className="allPictureSectionMiddle__ThirdBoxSecondBox">
                            <img src="https://github.githubassets.com/images/modules/site/codespaces/illo-hero-setup.png" alt="" />
                        </div>
                        <div className="allPictureSectionMiddle__ThirdBoxThirdBox"></div>
                        <div className="allPictureSectionMiddle__ThirdBoxFourthBox">
                            <img src="https://github.githubassets.com/images/modules/site/codespaces/illo-hero-docker.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="allPictureSectionRight">
                    <div className="allPictureSectionRightFirstBox"></div>

                    <div className="allPictureSectionRightSecondBoxSplit">
                        <div className="allPictureSectionRightSecondBoxSplit__FirstBox">
                            <p className="allPictureSectionRightSecondBoxSplit__FirstBoxPara">Memory up to</p>
                            <h3 className="allPictureSectionRightSecondBoxSplit__FirstBoxColoredText">64 <span>GB
                            </span></h3>
                        </div>
                        <div className="allPictureSectionRightSecondBoxSplit__SecondBox"></div>
                    </div>

                    <div className="allPictureSectionRightThirdBox">
                        <img src="https://github.githubassets.com/images/modules/site/codespaces/illo-hero-branches.png" alt="" />
                    </div>

                    <div className="allPictureSectionRightFourthBox">
                        <div className="allPictureSectionRightFourthBoxFirstBox">
                            <img src="https://github.githubassets.com/images/modules/site/codespaces/illo-hero-commits.png" alt="" />
                        </div>
                        <div className="allPictureSectionRightFourthBoxSecondBox">
                            <img src="https://github.githubassets.com/images/modules/site/codespaces/illo-hero-vm.png" alt="" />
                        </div>
                        <div className="allPictureSectionRightFourthBoxThirdBox">
                            <img src="https://github.githubassets.com/images/modules/site/codespaces/illo-hero-checks.png" alt="" />
                        </div>

                    </div>

                    <div className="allPictureSectionRightFifthBox">
                        <img src="https://github.githubassets.com/images/modules/site/codespaces/illo-hero-ports.png" alt="" />
                    </div>
                </div>


            </div>
           
        </div>
    )
}

export default Hero