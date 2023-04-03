// 全局共享数据示例
import { DEFAULT_URL } from '@/constants';
import { useState } from 'react';

const useUser = () => {
  const [name, setName] = useState<string>(DEFAULT_URL);
  return {
    name,
    setName,
  };
};

export default useUser;
