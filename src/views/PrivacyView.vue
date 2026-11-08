<template>
  <div class="legal-page">
    <section class="page-hero">
      <div class="container">
        <span class="tag">{{ t('法律信息', 'Legal', 'Pháp lý', 'Правовая информация') }}</span>
        <h1>{{ t('隐私政策', 'Privacy Policy', 'Chính sách bảo mật', 'Политика конфиденциальности') }}</h1>
        <p class="updated">{{ t('最后更新：2026年11月8日', 'Last updated: 8 November 2026', 'Cập nhật lần cuối: 8 tháng 11 năm 2026', 'Последнее обновление: 8 ноября 2026 г.') }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="legal-content">
          <p class="lead">{{ t('上锐机械（佛山市顺德区上锐机械有限公司）重视您的隐私。本政策说明我们通过本网站收集哪些信息、如何使用这些信息，以及您对自己的数据拥有哪些权利。', 'Shang Rui Machinery (Foshan Shunde Shangrui Machinery Co., Ltd.) respects your privacy. This policy explains what information we collect through this website, how we use it, and what rights you have over your data.', 'Shang Rui Machinery (Công ty TNHH Máy móc Shang Rui, Phường Lunjiao, Quận Shunde, Triều Châu) tôn trọng quyền riêng tư của bạn. Chính sách này giải thích chúng tôi thu thập thông tin gì qua website, sử dụng ra sao và quyền của bạn với dữ liệu.', 'Shang Rui Machinery (Foshan Shunde Shangrui Machinery Co., Ltd.) уважает вашу конфиденциальность. В этой политике описано, какую информацию мы собираем через сайт, как её используем и какие права у вас есть на свои данные.') }}</p>

          <h2>{{ t('一、我们收集的信息', '1. Information we collect', '1. Thông tin chúng tôi thu thập', '1. Какую информацию мы собираем') }}</h2>
          <p>{{ t('您主动提交的信息：', 'Information you provide voluntarily:', 'Thông tin bạn tự nguyện cung cấp:', 'Информация, которую вы предоставляете добровольно:') }}</p>
          <ul>
            <li>{{ t('询盘表单：您的姓名、邮箱、意向产品与留言内容，仅用于回复您的采购咨询。', 'Inquiry form: your name, email, product of interest and message, used only to reply to your purchasing enquiry.', 'Biểu mẫu tư vấn: tên, email, sản phẩm quan tâm và nội dung tin nhắn, chỉ dùng để trả lời yêu cầu mua hàng của bạn.', 'Форма запроса: имя, email, интересующая продукция и текст сообщения — используются только для ответа на ваш запрос о покупке.') }}</li>
            <li>{{ t('我们不会要求您提供密码、银行卡号或其他与采购无关的敏感个人信息。', 'We never ask for passwords, bank card numbers or other sensitive personal data unrelated to a purchase.', 'Chúng tôi không yêu cầu mật khẩu, số thẻ ngân hàng hay dữ liệu cá nhân nhạy cảm không liên quan đến mua hàng.', 'Мы никогда не запрашиваем пароли, номера банковских карт или иные чувствительные данные, не связанные с покупкой.') }}</li>
          </ul>
          <p>{{ t('自动收集的信息：', 'Automatically collected information:', 'Thông tin tự động thu thập:', 'Автоматически собираемая информация:') }}</p>
          <ul>
            <li>{{ t('当您访问网站时，服务器会记录 IP 地址、浏览器类型、访问时间与来源页面，用于排查故障和统计访问量。', 'When you visit the site, our server records your IP address, browser type, visit time and referring page, used for troubleshooting and traffic statistics.', 'Khi truy cập website, máy chủ ghi lại địa chỉ IP, loại trình duyệt, thời gian truy cập và trang giới thiệu, dùng để khắc phục sự cố và thống kê lưu lượng.', 'При посещении сайта сервер фиксирует IP-адрес, тип браузера, время визита и источник перехода — для диагностики и статистики.') }}</li>
            <li>{{ t('本站使用 Cookie 保存您的语言偏好，不用于广告追踪。', 'This site uses cookies to remember your language preference; they are not used for advertising tracking.', 'Website sử dụng cookie để ghi nhớ tùy chọn ngôn ngữ, không dùng cho theo dõi quảng cáo.', 'Сайт использует cookie для запоминания языковых предпочтений; они не применяются для рекламного трекинга.') }}</li>
          </ul>

          <h2>{{ t('二、我们如何使用这些信息', '2. How we use the information', '2. Cách chúng tôi sử dụng thông tin', '2. Как мы используем информацию') }}</h2>
          <ul>
            <li>{{ t('回复您的询盘，提供报价、规格书与运输方案。', 'Reply to your enquiries and provide quotations, specifications and shipping options.', 'Trả lời yêu cầu của bạn, cung cấp báo giá, thông số kỹ thuật và phương án vận chuyển.', 'Отвечать на ваши запросы, предоставлять расчёты, спецификации и варианты доставки.') }}</li>
            <li>{{ t('维护网站运行、改进产品与内容。', 'Keep the website running and improve our products and content.', 'Duy trì hoạt động website và cải thiện sản phẩm, nội dung.', 'Поддерживать работу сайта и улучшать продукцию и материалы.') }}</li>
            <li>{{ t('履行合同义务：生产、发运、售后与质保。', 'Perform our contractual obligations: manufacturing, shipping, after-sales service and warranty.', 'Thực hiện nghĩa vụ hợp đồng: sản xuất, vận chuyển, hậu mãi và bảo hành.', 'Исполнять договорные обязательства: производство, отгрузку, послепродажное обслуживание и гарантию.') }}</li>
          </ul>
          <p>{{ t('我们不会将您的信息出售给第三方，也不会用于未经您同意的营销推广。', 'We do not sell your information to third parties and do not use it for marketing without your consent.', 'Chúng tôi không bán thông tin của bạn cho bên thứ ba và không dùng để tiếp thị khi chưa có sự đồng ý của bạn.', 'Мы не продаём вашу информацию третьим лицам и не используем её для маркетинга без вашего согласия.') }}</p>

          <h2>{{ t('三、数据保存期限', '3. Data retention', '3. Thời gian lưu trữ', '3. Сроки хранения') }}</h2>
          <p>{{ t('询盘记录在商务沟通存续期间及结束后三年内保留，以便处理后续订单与售后事宜。服务器访问日志保留不超过十二个月。', 'Inquiry records are kept for the duration of the business relationship and for three years afterwards to handle follow-up orders and after-sales matters. Server access logs are retained for no more than twelve months.', 'Hồ sơ tư vấn được lưu trong thời gian quan hệ kinh doanh và thêm ba năm sau đó để xử lý đơn hàng tiếp theo và hậu mãi. Nhật ký truy cập máy chủ được giữ không quá mười hai tháng.', 'Записи обращений хранятся в период сотрудничества и ещё три года после него — для обработки последующих заказов и послепродажных вопросов. Журналы доступа хранятся не более двенадцати месяцев.') }}</p>

          <h2>{{ t('四、跨境传输', '4. Cross-border transfers', '4. Chuyển dữ liệu xuyên biên giới', '4. Трансграничная передача') }}</h2>
          <p>{{ t('我们的主营业务是出口，因此您的询盘信息会被传输至中国境内的办公与生产系统。我们在传输前去除无关信息，仅传输回复您的采购咨询所必需的内容。', 'Our core business is export, so inquiry information is transferred to our systems inside China. We strip anything not needed before transfer and transmit only what is required to answer your purchasing enquiry.', 'Hoạt động cốt lõi của chúng tôi là xuất khẩu, nên thông tin tư vấn được chuyển đến hệ thống của chúng tôi tại Trung Quốc. Chúng tôi loại bỏ dữ liệu không liên quan và chỉ truyền những gì cần thiết để trả lời yêu cầu của bạn.', 'Наш основной бизнес — экспорт, поэтому сведения из обращений передаются в наши системы в Китае. Перед передачей мы удаляем всё лишнее и передаём только то, что необходимо для ответа на ваш запрос.') }}</p>

          <h2>{{ t('五、您的权利', '5. Your rights', '5. Quyền của bạn', '5. Ваши права') }}</h2>
          <p>{{ t('在适用法律允许的范围内，您可以要求我们：更正您资料中的不准确之处；删除我们不再需要的资料；或者提供我们持有的关于您的资料副本。请通过下方方式联系我们，我们将在合理期限内答复。', 'To the extent permitted by applicable law, you may ask us to correct inaccurate details, delete information we no longer need, or provide a copy of the information we hold about you. Contact us using the details below and we will respond within a reasonable period.', 'Trong phạm vi pháp luật cho phép, bạn có thể yêu cầu chúng tôi sửa thông tin không chính xác, xóa dữ liệu không còn cần thiết, hoặc cung cấp bản sao dữ liệu chúng tôi đang lưu. Vui lòng liên hệ và chúng tôi sẽ phản hồi trong thời gian hợp lý.', 'В пределах, допускаемых применимым законодательством, вы можете потребовать исправить неточные данные, удалить сведения, которые нам больше не нужны, или получить копию имеющихся у нас данных о вас. Свяжитесь с нами — мы ответим в разумный срок.') }}</p>

          <h2>{{ t('六、第三方服务', '6. Third-party services', '6. Dịch vụ của bên thứ ba', '6. Сторонние сервисы') }}</h2>
          <p>{{ t('网站使用 Cloudflare 提供内容分发与安全防护，使用 EmailJS 处理询盘表单的邮件发送。这些服务商会按其自身隐私政策处理数据。本站不加载广告跟踪脚本，也不使用第三方分析 Cookie。', 'The site uses Cloudflare for content delivery and security, and EmailJS to send inquiry form emails. Those providers process data under their own privacy policies. This site loads no advertising trackers and uses no third-party analytics cookies.', 'Website sử dụng Cloudflare để phân phối nội dung và bảo mật, EmailJS để gửi email từ biểu mẫu tư vấn. Các nhà cung cấp đó xử lý dữ liệu theo chính sách bảo mật riêng. Trang không tải script theo dõi quảng cáo và không dùng cookie phân tích của bên thứ ba.', 'Сайт использует Cloudflare для доставки контента и безопасности, EmailJS — для отправки писем из формы запроса. Эти провайдеры обрабатывают данные по собственным политикам конфиденциальности. Рекламные трекеры не загружаются, сторонние аналитические cookie не используются.') }}</p>

          <h2>{{ t('七、未成年人', '7. Children', '7. Trẻ em', '7. Несовершеннолетние') }}</h2>
          <p>{{ t('本网站不面向未满18周岁童销售产品，也不会有意收集其个人信息。若您发现儿童向我们提供了个人信息，请联系我们并予以删除。', 'This website is not directed at children under 18 and we do not knowingly collect their personal information. If you believe a child has provided us with personal information, please contact us so we can delete it.', 'Website không dành cho trẻ em dưới 18 tuổi và chúng tôi không cố ý thu thập thông tin cá nhân của trẻ em. Nếu phát hiện trẻ em đã cung cấp thông tin, vui lòng liên hệ để chúng tôi xóa bỏ.', 'Сайт не предназначен для детей младше 18 лет, и мы намеренно не собираем их персональные данные. Если ребёнок предоставил нам информацию, свяжитесь с нами — мы её удалим.') }}</p>

          <h2>{{ t('八、政策更新', '8. Changes to this policy', '8. Cập nhật chính sách', '8. Изменения политики') }}</h2>
          <p>{{ t('本政策如有更新，我们会在本页标注新的更新日期。重大变更会通过您留下的联系方式另行通知。', 'If this policy changes, we will update the date at the top of this page. Material changes will also be communicated directly through the contact details you have provided.', 'Nếu chính sách thay đổi, chúng tôi sẽ cập nhật ngày ở đầu trang. Thay đổi quan trọng cũng sẽ được thông báo trực tiếp qua thông tin liên hệ bạn đã cung cấp.', 'При изменении политики мы обновим дату вверху страницы. О существенных изменениях мы также сообщим напрямую по оставленным вами контактам.') }}</p>

          <h2>{{ t('九、联系我们', '9. Contact us', '9. Liên hệ', '9. Контакты') }}</h2>
          <div class="contact-box">
            <p><strong>{{ t('佛山市顺德区上锐机械有限公司', 'Foshan Shunde Shangrui Machinery Co., Ltd.', 'Công ty TNHH Máy móc Shang Rui, Quận Shunde, Triều Châu', 'Foshan Shunde Shangrui Machinery Co., Ltd.') }}</strong></p>
            <p>{{ t('地址：中国广东省佛山市顺德区伦教街道新塘工业区世龙大道6号', 'Address: No. 6 Shelong Avenue, Xintang Industrial Zone, Lunjiao Town, Shunde District, Foshan, Guangdong, China', 'Địa chỉ: Số 6 đường Thế Long, khu công nghiệp Tân Đường, thị trấn Lunjiao, quận Shunde, Triều Châu, Quảng Đông, Trung Quốc', 'Адрес: Китай, провинция Гуандун, город Фошань, район Шуньдэ, посёлок Луньцзяо, промышленная зона Сяньтан, улица Шэлун, 6') }}</p>
            <p>{{ t('电话 / WhatsApp：', 'Phone / WhatsApp: ', 'Điện thoại / WhatsApp: ', 'Телефон / WhatsApp: ') }}<a href="tel:+8613929151908">+86 139-2915-1908</a></p>
            <p>{{ t('在线联系：', 'Contact form: ', 'Liên hệ trực tuyến: ', 'Форма обратной связи: ') }}<router-link :to="'/' + lang + '/contact'">{{ t('联系页面', 'Contact page', 'trang liên hệ', 'страница контактов') }}</router-link></p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useLang } from '@/composables/useLang'
const { t, lang } = useLang()
</script>

<style lang="scss" scoped>
.legal-page { background: $c-bg-primary; }

.page-hero {
  padding: 100px 0 48px;
  background: $c-bg-secondary;

  .tag {
    display: inline-block; font-size: $fs-sm; font-weight: $fw-semibold;
    color: $c-accent; background: rgba(26,111,212,.08);
    padding: 4px 14px; border-radius: 100px; margin-bottom: $s-md;
  }
  h1 { font-size: $fs-3xl; color: $c-text-primary; margin-bottom: $s-sm; }
  .updated { font-size: $fs-sm; color: $c-text-muted; }
}

.section { padding: 64px 0 80px; }

.legal-content {
  max-width: 820px;

  .lead {
    font-size: $fs-lg; color: $c-text-primary; line-height: 1.8;
    padding-bottom: $s-lg; margin-bottom: $s-lg;
    border-bottom: 1px solid rgba(0,0,0,.08);
  }

  h2 {
    font-size: $fs-xl; color: $c-text-primary;
    margin: $s-2xl 0 $s-md;
  }
  p { font-size: $fs-base; color: $c-text-secondary; line-height: 1.85; margin-bottom: $s-md; }
  ul { margin: 0 0 $s-md $s-xl; }
  li { font-size: $fs-base; color: $c-text-secondary; line-height: 1.85; margin-bottom: $s-xs; }
  a { color: $c-accent; }
}

.contact-box {
  background: $c-bg-secondary; border-radius: $r-md;
  padding: $s-lg; margin-top: $s-md;
  border-left: 3px solid $c-accent;

  p { margin-bottom: $s-xs; font-size: $fs-base; }
  p:last-child { margin-bottom: 0; }
}

@media (max-width: $bp-sm) {
  .page-hero { padding: 70px 0 32px; }
  .page-hero h1 { font-size: $fs-2xl; }
}
</style>
