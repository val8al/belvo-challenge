import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  private readonly validApiKey = 'YourValidApiKeyHere';  

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const apiKey = request.headers['api-key'];

    if (apiKey && apiKey === this.validApiKey) {
      return true;
    } else {
      throw new UnauthorizedException('Invalid API Key');
    }
  }
}