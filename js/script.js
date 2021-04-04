const domContainer = document.getElementById("root");

const contentClasses=["section-hide","section-show"];
const menuClasses=["menu-item not-selected","menu-item selected"];
const fccProjectImages=[
                        "tribute-page.png",
                        "survey-form.png",
                        "product-landing-page.png",
                        "technical-documantation-page.png",
                        "personal-portfolio-webpage.png",
                        "random-quote-machine.png",
                        "markdown-previewer.png",
                        "drum-machine.png",
                        "javascript-calculator.png",
                        "pomodoro-clock.png"
                    ];
const fccProjectLinks=[
                        "1-responsive-web-design/1.1-tribute-page/",
                        "1-responsive-web-design/1.2-survey-form/",
                        "1-responsive-web-design/1.3-product-landing-page/",
                        "1-responsive-web-design/1.4-technical-documentation-page/",
                        "1-responsive-web-design/1.5-personal-portfolio-webpage/",
                        "3-front-end-development-libraries/3.1-random-quote-machine/",
                        "3-front-end-development-libraries/3.2-markdown-previewer/index.html",
                        "3-front-end-development-libraries/3.3-drum-machine/index.html",
                        "3-front-end-development-libraries/3.4-javascript-calculator/index.html",
                        "3-front-end-development-libraries/3.5-pomodoro-clock/index.html",
                    ];
const selfProjectImages=[
                            "movie-search.png",
                            "tic-tac-toe.png"
                        ];
const selfProjectLinks=[
                            "omdb-search",
                            "tic-tac-toe"
                        ];

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            visibility: [1,0,0],
            selection: [1,0,0]
        };
        this.switchSection=this.switchSection.bind(this);
    }



    switchSection(x){
        let a=[0,0,0];
        a.splice(x,1,1);
        this.setState({
            visibility: a,
            selection: a
        });
    }

    render(){

        const fccProjects=fccProjectLinks.map((x,i)=>{return(
            <li className="project">
                <img className="project-image fcc-image" src={"../img/"+fccProjectImages[i]}></img>
                <a className="project-link fcc-link" href={"https://excalibur1702.github.io/freeCodeCamp-projects/"+x}>
                    {fccProjectImages[i].split("").slice(0,-4).join("").replace(/-/g," ")}
                </a>
            </li>
        );});

        const selfProjects=selfProjectLinks.map((x,i)=>{return(
            <li className="project">
                <img className="project-image self-image" src={"../img/"+selfProjectImages[i]}></img>
                <a className="project-link self-link" href={"https://excalibur1702.github.io/"+x}>
                    {selfProjectImages[i].split("").slice(0,-4).join("").replace(/-/g," ")}
                </a>
            </li>
        );});

        return(
            <div id="main">
                <nav id="sidebar">
                    <header id="menu-header">
                        <h4 id="name">Arya Tathe</h4>
                        <p id="description">Front-End Web Developer</p>
                    </header>
                    <ul id="menu">
                        <li className={menuClasses[this.state.selection[0]]} onClick={()=>this.switchSection(0)}>About Me</li>
                        <li className={menuClasses[this.state.selection[1]]} onClick={()=>this.switchSection(1)}>My Work</li>
                        <li className={menuClasses[this.state.selection[2]]} onClick={()=>this.switchSection(2)}>Contact</li>
                    </ul>
                    <footer id="menu-footer">
                    </footer>
                </nav>
                <div id="content">
                    <section className={contentClasses[this.state.visibility[0]]} id="about-me">

                        <img id="profile-pic" src="https://media-exp1.licdn.com/dms/image/C4D03AQHwaDmhSd8S2g/profile-displayphoto-shrink_800_800/0/1614791700520?e=1620259200&v=beta&t=VxUsE9lxUQ9DH5LxQoePgNXOxZ3paJav_ABFuXylSJE"></img>
                        <h1>Hi, I am <strong>Arya Tathe</strong></h1>
                        <h2>I'm an entry-level Front-End Web Developer</h2>
                        <h3>My skillset includes <strong>HTML5/CSS3</strong>, <strong>JavaScript</strong>, <strong>React</strong> with <strong>JSX</strong>, and <strong>SASS</strong>.</h3>
                    </section>
                    <section className={contentClasses[this.state.visibility[1]]} id="my-work">
                        <h1 className="section-header">My Work</h1>
                        <article id="selfprojects">
                            <h2>Self-projects</h2>
                            <ul className="projects-list">
                                {selfProjects.reverse()}
                            </ul>
                        </article>
                        <article id="freecodecamp">
                            <h2>freeCodeCamp projects</h2>
                            <p>My static webpages and web applications as part of the <a href="https://www.freecodecamp.org">freecodecamp.org</a> web development bootcamp's coursework.</p>
                            <p>Certifications: <a href="https://www.freecodecamp.org/certification/excalibur1702/responsive-web-design">Responsive Web Design</a> | <a href="https://www.freecodecamp.org/certification/excalibur1702/javascript-algorithms-and-data-structures">JavaScript Algorithms and Data Structures</a> | <a href="https://www.freecodecamp.org/certification/excalibur1702/front-end-libraries">Front End Libraries</a>
                            </p>
                            <ul className="projects-list">
                                {fccProjects.reverse()}
                            </ul>
                        </article>
                    </section>
                    <section className={contentClasses[this.state.visibility[2]]} id="contact">
                        <h1 className="section-header">Contact</h1>
                        <h2>Get in touch with me at:</h2>
                        <ul id="contact-area">
                            <li className="contact-link"><a href="mailto:aryatathe@gmail.com"><i className="fa fa-envelope fa-4x" target="_blank"></i></a></li>
                            <li className="contact-link"><a href="https://github.com/excalibur1702" target="_blank"><i className="fab fa-github fa-4x"></i></a></li>
                            <li className="contact-link"><a href="https://codepen.io/excalibur1702/" target="_blank"><i className="fab fa-codepen fa-4x"></i></a></li>
                            <li className="contact-link"><a href="https://www.linkedin.com/in/arya-tathe/" target="_blank"><i className="fab fa-linkedin fa-4x"></i></a></li>
                            <li className="contact-link"><a href="https://www.facebook.com/excalibur1702/" target="_blank"><i className="fab fa-facebook fa-4x"></i></a></li>
                            <li className="contact-link"><a href="tel:+919325574468" target="_blank"><i className="fa fa-phone fa-4x"></i></a></li>
                        </ul>
                    </section>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Main />, domContainer)
