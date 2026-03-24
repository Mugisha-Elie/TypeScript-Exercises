// class Logger {
//   logs = [];

//   addLog(message: string) {
//     this.logs.push({ timestamp: Date.now(), message });
//   }

//   static clearLogs() {
//     this.logs = [];
//   }
// }



class Logger {
  static logs:{timestamp:number, message:string}[] = [];

  addLog(message: string) {
    Logger.logs.push({ timestamp: Date.now(), message });
  }

  static clearLogs() {
    this.logs = [];
  }

//   static printLog(){
//     console.log(this.logs);
//   }
}


const logger = new Logger();
logger.addLog("Error");

// Logger.printLog();
Logger.clearLogs();
// Logger.printLog();
