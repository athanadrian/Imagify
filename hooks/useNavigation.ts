import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';

export const useNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const searchParams = useParams();
  return {
    router,
    pathname,
    params,
    searchParams,
  };
};
