export class Portfolio { 
    constructor(url, season, level, highestAward, teamName, teamNumber, awardPlace, region, id) { 
      this.url = url; 
      this.season = season; 
      this.level = level;
      this.awards = highestAward;
      this.teamName = teamName; 
      this.teamNumber = teamNumber; 
      this.awardPlace = awardPlace; 
      this.region = region; 
      this.id = id
      console.log(season)
      if (season === 2020) { 
          this.seasonDisplay = "2020-2021 Ultimate Goal"
      }
      else if        (season === 2021) { 
        this.seasonDisplay = "2021-2022 Freight Frenzy"
      }
    else if        (season === 2022) { 
      this.seasonDisplay = "2022-2023 Powerplay"
    }
    console.log(this.seasonDisplay)

    }
  
    getUrl() { 
      return this.url; 
    }
  
    getSeason() { 
      return this.season; 
    }
  
    getLevel() { 
      return this.level; 
    }
  
    getAward() { 
      return this.awards;
    }
  
    getName() { 
      return this.teamName 
    }
    getNum() { 
        return this.teamNumber;
    }
    getPlace() { 
        if(this.awardPlace != null) { 
            return this.awardPlace
        }
        else { 
            return ""; 
        }
    }
    getRegion() { 
      return this.region; 
    }

}
  