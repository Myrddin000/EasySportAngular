export interface TeamsDisplay {
    id: string;
    name: string;
    sport: string;
    userId: string;
  }

  export interface TeamForm {
    name: string;
    sport: string;
    userId: string;
  }

  // export interface TeamDetails{
  //   id: string;
  //   name: string;
  //   sport: string;
  //   userId: string;
  // }
  
  export interface Players{
    id: string;
    pseudo: string;
    email: string;
    userId: string;
    available: boolean;
    notAvailable: boolean;
    pending: boolean

  }

  export interface Teamplayers{
    teamId : string;
    userId : string;
    Pseudo : string;
    Email : string;
  }

  export interface GameTime{
    
    id : string;
    title : string;
    date : Date;
    startTime : Date;
    endTime : Date;
   
  }

  