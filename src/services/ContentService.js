
//External dependencies
import "lodash";
import "axios";

export default class ContentService{

    constructor() { 
        super();
    }

    static getContent(url){
        return axios.get(url);
    }
}