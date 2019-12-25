import { getMovies } from "../Table/fakeMovieService"
import _ from "lodash";
const chooseFilter=(field,logic,data,dbData)=>{
    //console.log(field,logic,data,dbData)
    var tempdata;
  //  if(field || logic || data === "")
    //    return dbData;
    if(logic === "c" || "dc")
    {
        tempdata=dbData.filter(val=>val[field].toLowerCase().includes(data.toLowerCase()))
        if(logic === "dc")
        {
            tempdata = _.difference(dbData,tempdata)
        }
        return tempdata;
    }   
    else if(logic === "s"){
        tempdata=dbData.filter(val=>val[field].toLowerCase().startsWith(data.toLowerCase()))
        return tempdata;
    }
    else{
        tempdata=dbData.filter(val=>val[field].toLowerCase().endsWith(data.toLowerCase()))
        return tempdata;
    }

}
const filterLogic=(val)=>{
    var db=getMovies()
    var finalData;
    var tempDb=db;
    //if(val[0]['dropDown1'] || val[0]['dropDown2'] || === "" )
   // console.table("empty")
    val.map(obj=>{
        if (obj['dropDown1'] && obj['dropDown2'] && obj['inputVal'] !== "")
        {
        finalData=chooseFilter(obj['dropDown1'],obj['dropDown2'],obj['inputVal'],tempDb)
        tempDb = finalData
    } 
      console.table(tempDb)
    })    
    //var data=tempDB.filter(data=>data[val[0]['dropDown1']].toLowerCase().includes(val[0]['inputVal']))
    //console.table(tempDb)
    //console.log(val[0]['inputVal'].toLower)
}

export default filterLogic