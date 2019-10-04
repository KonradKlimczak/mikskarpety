import { RemoteData, RemoteDataKind, assertNever } from '../utils';
import { ISock } from '../data/Sock';

export const getSock = (socks: RemoteData<ISock[]>, id: string): RemoteData<ISock> => {
  switch (socks.kind) {
    case RemoteDataKind.NotAsked:
    case RemoteDataKind.Loading:
    case RemoteDataKind.Failure:
      return socks;

    case RemoteDataKind.Success:
      const found = socks.data.find((sock) => sock.id === id);

      return found
        ? {
            kind: RemoteDataKind.Success,
            data: found,
          }
        : {
            kind: RemoteDataKind.Failure,
            error: new Error('Nie znaleziono skarpety o podanym ID'),
          };

    default:
      return assertNever(socks);
  }
};
