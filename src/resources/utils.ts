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
      //console.log(`${this.baseUrl}/${pathString}${queryString ? `?${queryString}` : ''}`)
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

  export const formatDateTransaction = (date: Date) => {
    return new Date(date).toLocaleDateString("es-US", 
    { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit' })
  }

  export const daysFromNowToDate = (targetDateStr: string): number => {
    const currentDate = new Date();
    const targetDate = new Date(targetDateStr);
    currentDate.setHours(0, 0, 0, 0);
    targetDate.setHours(0, 0, 0, 0);

    const differenceInTime = targetDate.getTime() - currentDate.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);

    return Math.ceil(differenceInDays);
}
