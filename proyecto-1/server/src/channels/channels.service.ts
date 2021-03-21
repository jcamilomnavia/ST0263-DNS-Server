import { Injectable } from '@nestjs/common';
import { P2pQueueService } from 'src/p2p-queue/p2p-queue.service';

@Injectable()
export class ChannelsService {
  private channels = {};

  channelExists(id) {
    return Object.prototype.hasOwnProperty.call(this.channels, id);
  }

  create(id) {
    if (this.channelExists(id)) {
      throw new Error(`Cannot create Channel: Channel already exists: ${id}`);
    }
    this.channels[id] = new P2pQueueService();
    return this.channels[id];
  }

  delete(id) {
    if (!this.channelExists(id)) {
      throw new Error(`Cannot delete Channel: Channel does not exists: ${id}`);
    }
    delete this.channels[id];
    return this.channels;
  }

  subscribe(id, consumer, user) {
    if (this.channelExists(id)) {
      return this.channels[id].create(consumer, user);
    }
    throw new Error(`Cannot find Channel:  ${id}`);
  }

  unsubscribe(id, consumer, user) {
    if (this.channelExists(id)) {
      if (consumer === user.username) {
        return this.channels[id].delete(consumer, user);
      }
      throw new Error(
        `You need to be authenticated with the user to unsuscribe from:  ${id}`,
      );
    }
    throw new Error(`Cannot find Channel:  ${id}`);
  }

  pushToChannel(id, message) {
    if (this.channelExists(id)) {
      return this.channels[id].pushBroadcast(message);
    }
    throw new Error(`Channel does not exists: ${id}`);
  }

  retrieveFromQueue(id, consumer) {
    if (this.channelExists(id)) {
      return this.channels[id].retrieveFromQueue(consumer);
    }
    throw new Error(`Channel does not exists: ${id}`);
  }

  list() {
    return Object.keys(this.channels);
  }
}
