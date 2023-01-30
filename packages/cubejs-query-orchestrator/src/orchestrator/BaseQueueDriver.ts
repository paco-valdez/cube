import {
  QueryKey,
  QueryMessageId,
  QueueDriverConnectionInterface,
  QueueDriverInterface,
} from '@cubejs-backend/base-driver';
import { getCacheHash } from './utils';

export abstract class BaseQueueDriver implements QueueDriverInterface {
  public redisHash(queryKey: QueryKey): QueryMessageId {
    return getCacheHash(queryKey);
  }

  abstract createConnection(): Promise<QueueDriverConnectionInterface>;

  abstract release(connection: QueueDriverConnectionInterface): Promise<void>;
}
