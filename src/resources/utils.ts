export class UrlBuilder {
    private baseUrl: string;
    private paths: string[] = [];
    private queryParams: Record<string, string | number> = {};
  
    constructor(baseUrl: string) {
      this.baseUrl = baseUrl;
    }
  
    setBaseUrl(url: string): UrlBuilder {
      this.baseUrl = url;
      return this;
    }
  
    addPath(path: string): UrlBuilder {
      if (path) {
        this.paths.push(encodeURIComponent(path));
      }
      return this;
    }
    addQueryParam(key: string, value: string | number): UrlBuilder {
      if (key && value !== undefined) {
        this.queryParams[key] = value;
      }
      return this;
    }
  
    build(): string {
      const pathString = this.paths.join('/');
      const queryString = Object.entries(this.queryParams)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
      console.log(`${this.baseUrl}/${pathString}${queryString ? `?${queryString}` : ''}`)
      return `${this.baseUrl}/${pathString}${queryString ? `?${queryString}` : ''}`;
    }
  }

  export const getBaseUrl = (env: string): string =>{
    switch(env){
        case "sandbox": return "https://sandbox.belvo.com/api" 
        case "dev": return "https://dev.belvo.com/api"
        case "prod": return "https://api.belvo.com"
        default: "https://sandbox.belvo.com/api" 
    }
  }


  export const BASE_URL:Map<string,string> = new Map([
    ["sandbox" , "https://sandbox.belvo.com/api"],
    ["dev" , "https://dev.belvo.com/api"],
    ["prod" , "https://api.belvo.com"]
])