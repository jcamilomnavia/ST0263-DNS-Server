import { Injectable } from '@nestjs/common';

@Injectable()
export class QueueService {
  private queue = [];

  push(element) {
    this.queue.push(element);
  }

  pull() {
    return this.queue.shift();
  }

  empty() {
    return (this.queue = []);
  }
}
