import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  selectedRole : number = 0;
  descriptionList: any = [];
  project : string = "";
  subTitle : string = "";
  expFrom : string = "";
  expTo : string = "";

  skills: any = [
    { title:'Angular',text: 'Javascript, Typescript, HTML, CSS, Bootstrap, TailwindCSS', image: "fab fa-angular"},
    { title:'Cloud Engineering',text: 'AWS EC2, ECS, Lambda, Cloudwatch', image: "fab fa-aws"},
    { title:'Databases',text: 'Postgres, MongoDB', image: "fa fa-database"},
  ];
  experiences: any = [
    { title:'Technology Analyst (AUS)',
      text: 'Full-time',
      from: "Dec 2018",
      to: "Present",
      project: "TELSTRA",
      subTitle: "Notifications Trigger and Error & Ticket Management",
      description: ["Working as a UI Dev lead, responsible in creating configuration UI using HTML5, CSS3, Angular4, Bootstrap.",
      "Developed configuration UI page for identifying and sending notifications and error management to customers and clients.",
      "Built servers using AWS and maintained cloud Infrastructure.",
      "Have received Telstra R&R and Glory awards for valuable contribution & dedicated performance on Telstra account for FY2020."
    ]
    },
    { title:'Technology Analyst (IND)',
      text: 'Full-time',
      from: "Mar 2018",
      to: "Dec 2018",
      project: "AT&T-DIRECTV",
      subTitle: "DIRECTVNOW",
      description: ["Worked as a senior UI developer in DIRECTVNOW application, which is the next-genstreaming platform, offering 120+ live TV channels, premium programming options and access to more than 25,000 On Demand shows and movies, that is aimed at replacing traditional TVchannel subscription and provision.",
      "Responsible to create RWD pages using HTML5, CSS3, Angular2, SCSS. Part of this pure Front-End development work, which has been receiving appreciation for repeated on-time delivery and migration to latest version of AngularJs6 with almost no issues."]
    },
    { title:'Senior Systems Engineer',
      text: 'Full-time',
      from: "Feb 2015",
      to: "Mar 2018",
      project:"AT&T-DIRECTV",
      subTitle: "NFLOTT",
      description: ["Worked as a UI Dev-lead, responsible in creating RWD pages for Eligibility check, Accountcreation, Ordering, using AngularJS, HTML5, JADE, CSS3, LESS, NodeJS including scriptscreation using KARMA, Protractor and GRUNT task runner."
      ,"Have won Awards for Excellence & Prima 2016-2017 – Value To Clients."]
    },
    { title:'Systems Engineer',
      text: 'Full-time',
      from: "Feb 2014",
      to: "Feb 2015",
      project:"AT&T-DIRECTV",
      subTitle: "NFLOTT",
      description: ["We established CI/CD development model and reaped the benefit of deploying code withminimal time consumption. Worked as a Full stack developer, responsible in building an UI(dashboard) for effective monitoring of CI/CD pipeline, covering metrics like code quality,Unit testing coverage, security violations, regression, Non-functional testing."
      ,"This was achieved using full stack framework(MEAN). Have received Insta award for single handedly designing the Devops initiative – March 2015."]
    }
  ];

  ngOnInit(): void {
    let experience = this.experiences?.[0];
    this.descriptionList = experience?.description;
    this.project = experience?.project;
    this.subTitle = experience?.subTitle;
    this.expFrom = experience?.from;
    this.expTo = experience?.to;
    this.calculateYearsOfExperience(this.experiences?.[3]?.from,this.experiences?.[0]?.to);
  }

  selectRole(title:string, index:number) {
    this.selectedRole = index;
    if(title) {
      const experience = this.experiences?.filter((exp: any) =>  exp.title === title);
      let exp = experience[0];
      this.descriptionList = exp.description;
      this.project = exp?.project;
      this.subTitle = exp?.subTitle;
      this.expFrom = exp?.from;
      this.expTo = exp?.to;
    }
  }

  calculateYearsOfExperience (fromdate:any, todate:any) {
    todate = (todate === 'Present') ? new Date() : todate;
    let fromDate = new Date(fromdate).getTime();
    let toDate = new Date(todate).getTime();
    let duration = toDate - fromDate ;
    let years = Math.floor(duration / 3.154e+10);
    let durationMinusYears = duration - (years * 3.154e+10);
    let months = Math.floor(duration / 2.628e+9) % 12;
    let durationMinusMonths = durationMinusYears - (months * 2.628e+9);
    let days = Math.floor(durationMinusMonths / 8.64e+7);
    let hours = Math.floor(duration / 3.6e+6 ) % 24;
    let mins = Math.floor(duration / 60000 ) % 60;
    let secs = Math.floor(duration / 1000 ) % 60;
    return [years, months, days, hours, mins, secs];
  }


}


