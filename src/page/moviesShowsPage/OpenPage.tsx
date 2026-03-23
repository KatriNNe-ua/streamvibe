import type { ReactElement } from "react";
import { useParams } from "react-router-dom";
import { useGetDataByIdQuery } from "../../services/moviesShowsAPI";
import Page404 from "../Page404";
import LoadingPage from "../../components/LoadingPage";
import StartSection from "../components/StartSection";
import GeneralHeroItem from "./components/GeneralHeroItem";
import SectionInfo from "./components/SectionInfo";

function OpenPage(): ReactElement {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useGetDataByIdQuery(id!, {
    skip: !id,
  });

  if (!id) return <Page404 />;
  if (isLoading) return <LoadingPage />;
  if (error) return <div>Error</div>;

  return (
    <>
      <section className="page__general-hero general-hero">
        <div className="general-hero__container">
          {data && <GeneralHeroItem item={data} />}
        </div>
      </section>
      {data && <SectionInfo item={data} />}
      <StartSection />
    </>
  );
}

export default OpenPage;
