import { ObjectId } from 'mongodb';

export const mapStringToObjectId = (id: string): ObjectId => (id ? new ObjectId(id) : new ObjectId());

export const mapObjectIdToString = (id: ObjectId): string => (id ? id.toHexString() : undefined);
