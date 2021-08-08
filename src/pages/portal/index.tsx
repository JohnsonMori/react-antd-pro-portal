import React, { useRef } from 'react';
import ProCard from '@ant-design/pro-card';
import { PageContainer } from '@ant-design/pro-layout';
import { LeftCircleFilled, RightCircleFilled } from '@ant-design/icons';
import { Carousel, Col, Row, Tabs } from 'antd';
import img1 from '@/assets/1.jpeg';
import img2 from '@/assets/2.jpg';
import img3 from '@/assets/3.jpg';
import img4 from '@/assets/4.jpg';
import img5 from '@/assets/5.jpg';
import './index.less';

const { TabPane } = Tabs;

const imgs = [
  { key: 1, title: '国际社会热烈祝贺中国共产党建党100周年', src: img1 },
  { key: 2, title: '二个标题超长这个标题超长这个标题超长这个标题超长', src: img2 },
  { key: 3, title: '第三个标题超长这个标题超长这个标题超长这个标题超长', src: img3 },
  { key: 4, title: '四个标题超长这个标题超长这个标题超长', src: img4 },
  { key: 5, title: '第五个标题超长这个标题超长这个标题超长这个标题超长', src: img5 },
];

const Portal: React.FC = () => {
  const carouselRef = useRef<any>(null);

  const handleArrowClick = (type: number) => {
    switch (type) {
      case 0:
        carouselRef.current?.prev();
        break;
      case 1:
        carouselRef.current?.next();
        break;
      default:
        break;
    }
  };

  return (
    <PageContainer>
      <>
        <Row gutter={{ xs: 6, sm: 12, md: 18, lg: 24 }}>
          <Col span={12}>
            <ProCard className="portal-card portal-top-left-card">
              <Carousel autoplay ref={carouselRef} dots={{ className: 'carousel-dots-wrap' }}>
                {imgs.map((img) => (
                  <div key={img.key} className="carousel-img-wrap">
                    <img src={img.src} />
                    <div className="carousel-img-title" title={img.title}>
                      {img.title}
                    </div>
                  </div>
                ))}
              </Carousel>
              <LeftCircleFilled
                className="carousel-arrow prev"
                onClick={() => handleArrowClick(0)}
              />
              <RightCircleFilled
                className="carousel-arrow next"
                onClick={() => handleArrowClick(1)}
              />
            </ProCard>
          </Col>
          <Col span={12}>
            <ProCard className="portal-card portal-top-right-card">
              <Tabs defaultActiveKey="1">
                <TabPane tab="新闻动态" key="1">
                  Content of Tab Pane 1
                </TabPane>
                <TabPane tab="政策法规" key="2">
                  Content of Tab Pane 2
                </TabPane>
                <TabPane tab="公示" key="3">
                  Content of Tab Pane 3
                </TabPane>
                <TabPane tab="通知公告" key="4">
                  Content of Tab Pane 4
                </TabPane>
              </Tabs>
            </ProCard>
          </Col>
        </Row>
      </>
    </PageContainer>
  );
};

export default Portal;
