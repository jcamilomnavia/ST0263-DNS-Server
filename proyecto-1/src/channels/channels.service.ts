import { Injectable } from '@nestjs/common';
import { P2pQueueService } from 'src/p2p-queue/p2p-queue.service';

@Injectable()
export class ChannelsService {
  private channels = {};

  create(id) {
    if (this.channelExists(id)) {
      throw new Error(`Cannot create Channel: Channel already exists: ${id}`);
    }
    this.channels[id] = new P2pQueueService();
    return this.channels[id];
  }

  subscribe(id, consumer) {
    if (this.channelExists(id)) {
      return this.channels[id].create(consumer);
    }
    throw new Error(`Cannot find Channel:  ${id}`);
  }

  channelExists(id) {
    return Object.prototype.hasOwnProperty.call(this.channels, id);
  }

  retrieveFromQueue(id, consumer) {
    if (this.channelExists(id)) {
      return this.channels[id].retrieveFromQueue(consumer);
    }
    throw new Error(`Channel does not exists: ${id}`);
  }

  pushToChannel(id, message) {
    if (this.channelExists(id)) {
      return this.channels[id].pushBroadcast(message);
    }
    throw new Error(`Channel does not exists: ${id}`);
  }
}
