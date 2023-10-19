import styled from "styled-components";

import BackButton from "@/components/BackButton";
import Head from "@/components/Head";
import LikeButton from "@/components/LikeButton";
import BaseInput from "@/components/TextInput";

export default function CommunityDetail() {
  const MOCK_DATA = {
    profile: {
      image: "",
      name: "박나무",
    },
    info: {
      title: "업사이클링 체험",
      image: "img",
      content:
        "여러분 아직도 재활용만 열심히 하시나요?\n조금만 더 찾아보면 재미있는 체험도 많은데 같이하는 건 어떤가요?",
    },
    tags: ["빈티지", "재봉틀", "데님", "파우치", "리폼", "공방"],
    comments: [
      {
        profile: {
          image: "",
          name: "주이파리",
        },
        content: "예뻐요",
      },
      {
        profile: {
          image: "",
          name: "주이파리",
        },
        content: "예뻐요",
      },
    ],
  };

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Head title="커뮤니티 | Orday" />
      <BackButton pageTitle="댓글" />
      <Post>
        <Header>
          <Profile>
            <img src={MOCK_DATA.profile.image} alt={MOCK_DATA.profile.name} />
            <span>{MOCK_DATA.profile.name}</span>
          </Profile>
          <LikeButton target="post" />
        </Header>
        {MOCK_DATA.info.image && (
          <img src={MOCK_DATA.info.image} alt={MOCK_DATA.info.title} />
        )}
        <Text>
          {MOCK_DATA.info.title && <h3>{MOCK_DATA.info.title}</h3>}
          <div>{MOCK_DATA.info.content}</div>
        </Text>
        <Tags>
          {MOCK_DATA.tags.map((tag, i) => (
            <h3 key={i}>#{tag}</h3>
          ))}
        </Tags>
      </Post>
      <div>
        {MOCK_DATA.comments.map((comment, i) => (
          <Comment key={i}>
            <Profile>
              <img src={comment.profile.image} alt={comment.profile.name} />
              <span>{comment.profile.name}</span>
            </Profile>
            <p>{comment.content}</p>
          </Comment>
        ))}
      </div>
      <CommentForm onSubmit={onSubmit}>
        <TextInput id="comment" placeholder="댓글을 작성해보세요." />
        <button>등록</button>
      </CommentForm>
    </Container>
  );
}

const Container = styled.div`
  width: 722px;
  margin: 0 auto;
  padding-bottom: 150px;

  img {
    background-color: ${({ theme }) => theme.colors["neutral"]["20"]};
  }
`;

const Post = styled.div`
  padding: 20px 0;

  & > img {
    display: block;
    width: 722px;
    height: 500px;
    border-radius: 20px;
    object-fit: cover;
    margin-bottom: 20px;
  }

  h3 {
    ${({ theme }) => theme.typo["body-3-m"]};
    font-weight: 600;
    color: ${({ theme }) => theme.colors["neutral"]["70"]};
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  svg {
    width: 24px;
    height: 24px;
  }
`;

const Profile = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }

  span {
    ${({ theme }) => theme.typo["body-2-b"]};
    color: ${({ theme }) => theme.colors["neutral"]["80"]};
  }
`;

const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 6px;

  div {
    ${({ theme }) => theme.typo["body-4-r"]};
    color: #8e8e8e;
    white-space: pre-wrap;
  }
`;

const Tags = styled.div`
  padding: 10px 6px;
  h3 {
    display: inline-block;
    margin-right: 7px;
  }
`;

const Comment = styled.div`
  padding-bottom: 20px;
  p {
    ${({ theme }) => theme.typo["body-3-m"]};
    color: ${({ theme }) => theme.colors["neutral"]["80"]};
    margin-left: 50px;
  }
`;

const TextInput = styled(BaseInput)`
  margin-top: 56px;
  & > input {
    width: 100%;
    border: 1px solid #aeaeae;
    padding-right: 50px;
  }
`;

const CommentForm = styled.form`
  position: relative;
  button {
    all: initial;
    ${({ theme }) => theme.typo["body-2-r"]};
    color: #a3a3a3;
    padding: 6px 8px;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 4px;
  }
`;
