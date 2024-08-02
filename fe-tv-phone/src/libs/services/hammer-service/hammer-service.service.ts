import { inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HammerServiceService {
  private readonly platforrmId = inject(PLATFORM_ID);

  
}
