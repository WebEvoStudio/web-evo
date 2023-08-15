'use client';
import React from 'react';
import {Container} from '@mui/material';
import Section from '../components/section';

export const PrivacyPolicy = () => {
  const siteUrl = 'https://web-evo.bulv.life/';
  const siteName = 'Web Evo Studio';
  const sections = [
    {
      title: '隐私政策',
      desc: (
        <div>
          <div>{siteName}.（“我们”，“我们”或“我们的”）操作 {siteUrl} 网站（此处称为“站点”）。</div>
          {/* eslint-disable-next-line max-len */}
          <div>此页面在您使用我们的服务以及与该数据相关联的选择时，将向您告知我们有关收集，使用和披露个人数据的政策。 我们使用您的数据来提供和改进网站。 使用本网站，您同意根据本政策收集和使用信息。 除非本隐私政策中另有定义，否则本隐私政策中使用的术语与我们条款和条件中的含义相同，可以从 {siteUrl} 中访问。</div>
        </div>
      ),
    },
    {
      title: 'Definitions',
      desc: (
        <ul className="list-disc leading-normal text-grey_font_col ml-8">
          <li>网站: 此
            <a
              href={siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >{siteUrl}</a>
            网站由 {siteName} 运营.
          </li>
          <li>个人数据：是指可以从该数据（或从我们拥有或可能拥有的那些信息和其他信息）中识别出的有关在世个人的数据。</li>
          <li>使用数据：是通过使用网站或从网站基础设施生成的自动收集的数据（例如，页面访问的持续时间）。</li>
          <li>Cookie：是存储在您的设备（计算机或移动设备）上的小文件。</li>
          <li>
            <span>数据控制者：指（单独或共同或与其他人共同）确定处理或将处理任何个人信息的目的和方式的自然人或法人。</span>
            <ul className="pl-3" style={{listStyleType: 'circle'}}>
              <li>就本隐私政策而言，我们是您个人数据的数据控制者。</li>
            </ul>
          </li>
          <li>
            <span>数据处理者（或服务提供商）是指代表数据控制者处理数据的任何自然人或法人。</span>
            <ul className="pl-3" style={{listStyleType: 'circle'}}>
              <li>我们可能会使用各个服务提供商的服务，以便更有效地处理您的数据。</li>
            </ul>
          </li>
          <li>数据主体：是使用我们网站的任何在世个人，并且是个人数据的主体。</li>
        </ul>
      ),
    },
    {
      title: '信息收集和使用',
      desc: (
        <p className="leading-normal text-grey_font_col">我们出于各种目的收集多种不同类型的信息，以便为您提供和改进我们的网站。</p>
      ),
      children: (
        <div>
          <h2 className="text-light_title_col md:text-46 text-38 leading-44 font-bold">收集的数据类型</h2>
          <div className="flex flex-col pb-4">
            <span className="text-light_title_col underline md:text-46 text-36 leading-10">个人资料</span>
            <p
              className="text-light_title_col mb-2"
            >在使用我们的网站时，我们可能会要求您向我们提供某些用于联系或识别您的个人身份信息（“个人数据”）。 个人身份信息可能包括但不限于：</p>
            <ul className="list-disc leading-normal text-grey_font_col ml-8">
              <li>电子邮件地址</li>
              <li>名字和姓氏</li>
              <li>Cookie 和使用数据</li>
            </ul>
            <p
              className="text-light_title_col"
            >我们可能会使用您的个人数据与您联系，提供时事通讯、营销或促销材料以及其他可能为您服务的信息。 您可以按照我们发送的任何电子邮件中的取消订阅链接或说明选择不接收任何或所有这些通信。</p>
          </div>
          <div className="flex flex-col pb-4">
            <span className="text-light_title_col underline md:text-46 text-36 leading-10">使用数据</span>
            <p
              className="text-light_title_col"
            >
              {/* eslint-disable-next-line max-len */}
              我们还可能收集有关如何访问和使用网站的信息（“使用数据”）。 该使用数据可能包括您计算机的互联网协议地址（例如 IP 地址）、浏览器类型、浏览器版本、您访问的我们网站的页面、您访问的时间和日期、在这些页面上花费的时间等信息， 唯一的设备标识符和其他诊断数据。
            </p>
          </div>
          <div className="flex flex-col">
            <span className="text-light_title_col underline md:text-46 text-36 leading-10">追踪& Cookie 数据</span>
            <p className="text-light_title_col pb-4">
              我们使用 cookie 和类似的跟踪技术来跟踪我们网站上的活动并保存某些信息。
              <br/>
              Cookie 是包含少量数据的文件，其中可能包含唯一的匿名标识符。 Cookie 从网站发送到您的浏览器并存储在您的设备上。 还使用其他跟踪技术，例如用于收集和跟踪信息以及改进和分析我们的网站的信标、标签和脚本。
            </p>
            <p
              className="text-light_title_col"
            >您可以指示您的浏览器拒绝所有 cookie 或指示何时发送 cookie。 但是，如果您不接受 cookie，您可能无法使用我们网站的某些部分。 我们使用的 Cookie 示例：</p>
            <ul className="list-disc leading-normal text-grey_font_col ml-8">
              <li>会话 Cookie。 我们使用会话 Cookie 来运营我们的网站。</li>
              <li>偏好 Cookie。 我们使用偏好 Cookie 来记住您的偏好和各种设置。</li>
              <li>安全 Cookie。 我们出于安全目的使用安全 Cookie。</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: '数据的使用',
      desc: '{siteName}. 将收集的数据用于各种目的：',
      children: (
        <ul className="list-disc leading-normal text-grey_font_col ml-8">
          <li>提供和维护我们的网站</li>
          <li>当您选择时，允许您参与我们网站的互动功能</li>
          <li>提供客户支持</li>
          <li>收集分析或有价值的信息，以便我们改进我们的网站</li>
          <li>监控我们网站的使用情况</li>
          <li>检测、预防和解决技术问题</li>
          <li>提供已批准交易的发票或收据</li>
          <li>向您提供与您已购买或询问的产品、服务和活动类似的我们提供的其他商品、服务和活动的新闻、特别优惠和一般信息，除非您选择不接收此类信息</li>
        </ul>
      ),
    },
    {
      title: '《通用数据保护条例》(GDPR) 下处理个人数据的法律依据',
      // eslint-disable-next-line max-len
      desc: '如果您来自欧洲经济区 (EEA)，{siteName}. 收集和使用本隐私政策中所述个人信息的法律依据取决于我们收集的个人数据以及我们收集这些数据的具体背景。 {siteName}. 可能会处理您的个人数据，因为：',
      children: (
        <ul className="list-disc leading-normal text-grey_font_col ml-8">
          <li>我们需要与您履行合同</li>
          <li>您已允许我们这样做</li>
          <li>处理符合我们的合法利益，并且不会被您的权利所取代</li>
          <li>用于付款处理目的</li>
          <li>遵守法律</li>
        </ul>
      ),
    },
    {
      title: '数据保留',
      // eslint-disable-next-line max-len
      desc: '{siteName}. 将仅在本隐私政策中规定的目的所需的时间内保留您的个人数据。 我们将在必要的范围内保留和使用您的个人数据，以遵守我们的法律义务（例如，如果我们需要保留您的数据以遵守适用的法律）、解决争议并执行我们的法律协议和政策。 {siteName}. 还将保留使用数据用于内部分析目的。 使用数据的保留时间较短，除非该数据用于加强安全性或改进我们网站的功能，或者我们有法律义务保留更长时间的数据。',
    },
    {
      title: '数据传输',
      desc: (
        <div>
          <p>您的信息（包括个人数据）可能会传输到并保存在位于您所在州、省、国家或其他政府管辖区之外的计算机上，这些地方的数据保护法可能与您所在管辖区的数据保护法不同。</p>
          {/* <p>如果您位于美国境外并选择向我们提供信息，请注意，我们会将数据（包括个人数据）传输到美国并在那里进行处理。 您同意本隐私政策并提交此类信息，即表示您同意该转让。</p>*/}
          {/* eslint-disable-next-line max-len */}
          <p>{siteName}. 将采取一切合理必要的步骤，确保您的数据得到安全处理并符合本隐私政策，并且除非有足够的控制措施，否则不会将您的个人数据传输到任何组织或国家/地区 包括您的数据和其他个人信息的安全。</p>
        </div>
      ),
    },
    // {
    //   title: '数据披露',
    //   desc: '',
    // },
  ];
  return (
    <Container maxWidth={'lg'}>
      {sections.map(
          ({title, desc, children}, index) => <Section key={index} first={index === 0} title={title} desc={desc}>
            {children}
          </Section>,
      )}
    </Container>
  );
};
