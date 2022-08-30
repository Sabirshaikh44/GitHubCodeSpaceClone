import React, { useEffect, useRef, useState } from 'react';
import "./CardsAndInfo.css";

function CardsAndInfo() {
    // IntersectionObserver implementation : for Animation support
    const Ref = useRef();
    const [sectionVisible, setSectionVisible] = useState(false);
    const Option = {
        root: null,
        rootMargin: "-60px",
        threshold: 0,
    };


    useEffect(() => {


        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setSectionVisible(entry?.isIntersecting);
            console.log(entry);
        }, Option);

        observer.observe(Ref?.current);

    }, [Option]);
    return (
        <div className="cards__infoContainer" ref={Ref}>
            <div className={`cardOneSplitContainer ${sectionVisible ? " SectionVisibleStyle" : "SectionNotVisibleStyle"}`}>
                <div className="cardOneLeftSection" >
                    <h1 className="cardOneLeftSectionHeading">
                        The full power of Visual Studio Code
                    </h1>
                    <p className="cardOneLeftSectionDescPara">
                        Use the full power of Visual Studio Code, including the editor, terminal, debugger, version control, settings sync, and the entire ecosystem of extensions. Work in the browser or hand off to your desktop.
                    </p>
                    <div className={`cardOneLeftSectionSupportsLogoImg  ${sectionVisible ? "cardOneLeftSectionSupportsLogoImgVisible" : "cardOneLeftSectionSupportsLogoImgNotVisible"}`} ref={Ref}>
                        <img src="https://github.githubassets.com/images/modules/site/codespaces/logos.png" alt="" />
                    </div>
                </div>
                <div className="cardOneRightSection">
                    <img src="https://github.githubassets.com/images/modules/site/codespaces/illo-vscode.png?width=1142&format=webpll" alt="" />
                    <div className={`cardOneRightSectionImgOnImg ${sectionVisible ? "SectionOneImgOnImgVisibleStyle" : "SectionImgOnImgNotVisibleStyle"}`} ref={Ref}>
                        <img src="https://github.githubassets.com/images/modules/site/codespaces/illo-terminal.png?width=982&format=webpll" alt="" />
                    </div>
                </div>
            </div>

            <div className={`cardTwoSplitContainer  ${sectionVisible ? "SectionTwoVisibleStyle" : "SectionTwoNotVisibleStyle"}`} ref={Ref}>
                <div className={`cardTwoLeftSection ${sectionVisible ? "SectionTwoVisibleStyle" : "SectionTwoNotVisibleStyle"}`}>
                    <h1 className="cardTwoLeftSectionHeading">
                        Faster than your laptop
                    </h1>
                    <p className="cardTwoLeftSectionDescPara">
                        Spin up new dev environment for any sized project in seconds with prebuilt images. GitHub’s own 35GB dev image starts in under 10 seconds. Scale your cloud VMs up to 32 cores and 64GB of RAM. And with low-latency connections across four regions, you won’t even remember it’s not your local machine.
                    </p>
                    <div className="cardTwoLeftSectionSupportSpecDesc">
                        <div className="SpecsAndHeadings">
                            <p className="specsGrayHeader">
                                CPUs up to
                            </p>
                            <h3 className="SpecsDesc">
                                32 cores
                            </h3>
                        </div>
                        <div className="SpecsAndHeadings">
                            <p className="specsGrayHeader">
                                Memory up to
                            </p>
                            <h3 className="SpecsDesc">
                                64 GB
                            </h3>
                        </div>
                        <div className="SpecsAndHeadings">
                            <p className="specsGrayHeader">
                                Spin up
                            </p>
                            <h3 className="SpecsDesc">
                                {"<"}10 sec
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="cardTwoRightSection" ref={Ref}>
                    <img src="https://github.githubassets.com/images/modules/site/codespaces/illo-cpu.png?width=1261&format=webpll" alt="" />

                </div>
            </div>

            <div className={`cardThirdSplitContainer`}>
                <div className="cardThirdLeftSection" ref={Ref}>
                    <h1 className="cardThirdLeftSectionBoldText">
                        Standardized dev environments
                    </h1>
                    <p className="cardThirdLeftSectionGrayPara">
                        Join a new team and just start coding. Standardize environments, runtime requirements, hardware specs, extensions and editor settings in <span className="CardThirLeftSectionParaHighightedTxt">
                            .devcontainer.json</span>  configuration files. Isolate dependencies between projects with containers and docker-compose.
                    </p>
                </div>
                <div className="cardThirdRightSection">
                    <img src="https://github.githubassets.com/images/modules/site/codespaces/illo-env-bg.png" alt="" />
                    <div className={`cardThirdRightSectionImgOnImgContainer ${sectionVisible ? "SlideInImage" : "SlideOutImage"}`}>
                        <img src="https://github.githubassets.com/images/modules/site/codespaces/illo-env-ports-settings.png" alt="" />
                        <img src="https://github.githubassets.com/images/modules/site/codespaces/illo-env-post-create.png" alt="" />
                        <img src="https://github.githubassets.com/images/modules/site/codespaces/illo-env-extensions.png" alt="" />
                    </div>

                </div>
            </div>

            <div className="cardFourthSplitContainer">
                <div className="cardFourthRightSection">
                    <h1 className="cardFourthRightSectionBoldHeader">
                        Browser preview and port forwarding
                    </h1>
                    <p className="cardFourthRightSectionGrayPara">
                        Preview your changes in the browser with instant reloads (websocket and HMR support) and share private and public ports with your teammates.
                    </p>
                </div>
                <div className="cardFourthLeftSection">
                    <img src="https://github.githubassets.com/images/modules/site/codespaces/illo-hello.png" alt="" />
                    <div className="cardFourthLeftSectionImgOnImg"><img src="https://github.githubassets.com/images/modules/site/codespaces/illo-ports.png" alt="" />
                        <img src="https://github.githubassets.com/images/modules/site/codespaces/illo-context-menu.png" alt="" />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default CardsAndInfo