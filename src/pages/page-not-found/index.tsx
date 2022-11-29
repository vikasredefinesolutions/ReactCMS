import { paths } from 'constants/paths.constant';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const PageNotFound: NextPage = () => {
  const router = useRouter();
  return (
    <div className="container static-content">
      <div className="row">
        <div className="col-sm-12 col-xs-12">
          <div className="text-center p-t-60 p-b-30">
            <div className="m-b-40">
              <img src="/images/404.png" alt="404" title="404" />
            </div>
            <div className="you-may-like-title m-b-20">Page Not Found</div>
            <div className="m-b-30">
              <button
                onClick={() => router.push(paths.HOME)}
                className="btn btn-default btn-lg"
              >
                Back to home page
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
