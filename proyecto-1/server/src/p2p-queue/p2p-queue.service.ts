import { Injectable } from '@nestjs/common';
import { QueueService } from 'src/queue/queue.service';

@Injectable()
export class P2pQueueService {
  private queues = {};

  queueExists(name) {
    return this.queues.hasOwnProperty(name);
  }

  create(id, user = null) {
    if (this.queueExists(id)) {
      if (user && id === user.username) {
        return true;
      }
      throw new Error(`Cannot create queue: queue already exists: ${id}`);
    }
    this.queues[id] = new QueueService();
    return this.queues[id];
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

  retrieveFromQueue(id) {
    if (this.queueExists(id)) {
      return this.queues[id].pull();
    }
    throw new Error(`Queue does not exists: ${id}`);
  }

  list() {
    return Object.keys(this.queues);
  }
}
