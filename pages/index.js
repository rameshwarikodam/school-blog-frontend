import Layout from '../components/Layout';
import Link from 'next/link';
import Head from 'next/head';
import { withRouter } from 'next/router';
import { APP_NAME, DOMAIN, FB_APP_ID } from '../config';

const Index = ({ router }) => {
    const head = () => (
        <Head>
            <title>Educational Info | {APP_NAME}</title>
            <meta
                name="description"
                content="Collection of educational blogs and and all updates for teachers and students"
            />
            <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
            <meta property="og:title" content={`Latest educational information | ${APP_NAME}`} />
            <meta
                property="og:description"
                content="Collection of educational blogs and and all updates for teachers and students"
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${DOMAIN}/static/images/seoblog.jpg`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/static/images/seoblog.jpg`} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );
    return (
        <React.Fragment>
            {head()}
            <Layout>
                <article className="overflow-hidden">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="font-weight-bold">Digital Dnyanganga</h1>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center pt-4 pb-5">
                                <p className="lead">
                                    Best educational content and all updates for teachers and students.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="flip flip-horizontal">
                                    <div
                                        className="front"
                                        style={{
                                            backgroundImage: `url('../static/images/studentscrop.png')`
                                        }}
                                    >
                                        <h2 className="text-center h1">Students</h2>
                                    </div>
                                    <div className="back text-center">
                                        <Link href="/categories/students">
                                            <a>
                                                <h3 className="h1">Students</h3>
                                            </a>
                                        </Link>
                                        <p className="lead">
                                            Educational content explained in an easier way for students to learn and grow
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="flip flip-horizontal">
                                    <div
                                        className="front"
                                        style={{
                                            backgroundImage: `url('../static/images/teachercrop.png')`
                                        }}
                                    >
                                        <h2 className="text-center h1 mt: 0 pt: 0">Teachers</h2>
                                    </div>
                                    <div className="back text-center">
                                        <Link href="/categories/teachers">
                                            <a>
                                                <h3 className="h1">Teachers</h3>
                                            </a>
                                        </Link>
                                        <p className="lead">
                                            Best source of data for teachers to use on a daily basis
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="flip flip-horizontal">
                                    <div
                                        className="front"
                                        style={{
                                            backgroundImage: `url('../static/images/otherscrop.png')`
                                        }}
                                    >
                                        <h2 className="text-center h1">Others</h2>
                                    </div>
                                    <div className="back text-center">
                                        <Link href="/categories/others">
                                            <a>
                                                <h3 className="h1">Others</h3>
                                            </a>
                                        </Link>
                                        <p className="lead">
                                            A huge source of infomation to consume
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </Layout>
        </React.Fragment>
    );
};

export default withRouter(Index);
