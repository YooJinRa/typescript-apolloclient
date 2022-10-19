import { InMemoryCache } from '@apollo/client';

// 클라이언트 브라우저 메모리에 GraphQL 요청-응답을 캐싱하는 공간을 생성한다는 뜻
export const cache = new InMemoryCache();
