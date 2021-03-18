import { Injectable } from '@nestjs/common';
import { QueueService } from 'src/queue/queue.service';

@Injectable()
export class P2pQueueService {
  private queues = {};

  create(id) {
    if (this.queueExists(id)) {
      throw new Error(`Cannot create queue: queue already exists: ${id}`);
    }
    this.queues[id] = new QueueService();
    return this.queues[id];
  }

  queueExists(name) {
    return this.queues.hasOwnProperty(name);
  }

  retrieveFromQueue(id) {
    if (this.queueExists(id)) {
      return this.queues[id].pull();
    }
    throw new Error(`Queue does not exists: ${id}`);
  }

  pushToQueue(id, message) {
    if (this.queueExists(id)) {
      return this.queues[id].push(message);
    }
    throw new Error(`Queue does not exists: ${id}`);
  }

  pushBroadcast(message) {
    for (const [key] of Object.entries(this.queues)) {
      this.queues[key].push(message);
    }
  }
}
