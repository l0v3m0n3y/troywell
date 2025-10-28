class troywell{
    constructor(){
        this.api = "https://troywell.org/api"
        this.api_2 = "https://ext.troywell.org/api"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","x-requested-with": "xmlhttprequest","content-type":"application/json"}
    }
    async blocking_domains(){
        let req=await fetch(`${this.api}/configs/blockingDomains`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async my_ip(){
        let req=await fetch(`${this.api_2}/vpn/ip`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async country_list(){
        let req=await fetch(`${this.api_2}/vpn/countries`,{method:"GET",headers: this.headers});
        return req.json();
    }
}
module.exports = {troywell};