<template>
  <div class="legal-page">
    <section class="page-hero">
      <div class="container">
        <span class="tag">{{ t('法律信息', 'Legal', 'Pháp lý', 'Правовая информация') }}</span>
        <h1>{{ t('服务条款', 'Terms of Service', 'Điều khoản dịch vụ', 'Условия использования') }}</h1>
        <p class="updated">{{ t('最后更新：2026年11月8日', 'Last updated: 8 November 2026', 'Cập nhật lần cuối: 8 tháng 11 năm 2026', 'Последнее обновление: 8 ноября 2026 г.') }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="legal-content">
          <p class="lead">{{ t('使用本网站即表示您同意以下条款。如果您不同意其中任何一条，请停止使用本网站。', 'By using this website you agree to the terms below. If you do not agree with any of them, please stop using the site.', 'Việc sử dụng website đồng nghĩa với việc bạn chấp nhận các điều khoản dưới đây. Nếu không đồng ý, vui lòng ngừng sử dụng trang web.', 'Используя сайт, вы соглашаетесь с приведёнными ниже условиями. Если вы не согласны, прекратите использование сайта.') }}</p>

          <h2>{{ t('一、产品信息', '1. Product information', '1. Thông tin sản phẩm', '1. Информация о продукции') }}</h2>
          <p>{{ t('本网站的产品参数、规格与应用说明用于一般性介绍。由于我们持续改进机型，实际交付的设备可能与网页所示存在差异——尤其是非标定制的机型。报价单与合同中确认的参数优先于网页内容。', 'Specifications, parameters and application notes on this site are provided for general information. Because we continuously improve our machines, the equipment actually delivered may differ from what is shown online, particularly for non-standard builds. Parameters confirmed in a quotation or a contract take precedence over anything shown on this website.', 'Thông số, kỹ thuật và mô tả ứng dụng trên website mang tính giới thiệu chung. Do liên tục cải tiến sản phẩm, thiết bị thực giao có thể khác với hình ảnh trên web, nhất là với máy chế tạo theo yêu cầu riêng. Thông số đã xác nhận trong báo giá hoặc hợp đồng được ưu tiên.', 'Приведённые на сайте характеристики и области применения носят общий информационный характер. Поскольку мы постоянно дорабатываем модели, фактически поставленное оборудование может отличаться от представленного на сайте, особенно для нестандартных исполнений. Параметры, зафиксированные в предложении или договоре, имеют приоритет над информацией на сайте.') }}</p>

          <h2>{{ t('二、报价与订单', '2. Quotations and orders', '2. Báo giá và đơn hàng', '2. Предложения и заказы') }}</h2>
          <ul>
            <li>{{ t('网站上的价格仅供参考，不构成要约。具体价格以正式报价单为准。', 'Prices shown on the site are for reference only and do not constitute an offer. Binding prices are those on a formal quotation.', 'Giá trên website chỉ mang tính tham khảo, không phải là đề nghị. Giá cụ thể theo báo giá chính thức.', 'Цены на сайте носят справочный характер и не являются офертой. Действующей является цена в официальном предложении.') }}</li>
            <li>{{ t('订单在收到货款后生效。定制机型需支付定金后排产。', 'An order becomes effective once payment is received. Non-standard machines enter production after the deposit is paid.', 'Đơn hàng có hiệu lực sau khi nhận thanh toán. Máy chế tạo riêng sẽ vào sản xuất sau khi đặt cọc.', 'Заказ вступает в силу после получения оплаты. Производство нестандартных машин начинается после внесения аванса.') }}</li>
            <li>{{ t('交期从收到定金且技术细节确认之日起计算。', 'Delivery time is counted from the date the deposit is received and technical details are confirmed.', 'Thời gian giao hàng tính từ ngày nhận cọc và xác nhận chi tiết kỹ thuật.', 'Срок поставки исчисляется с даты получения аванса и подтверждения технических деталей.') }}</li>
          </ul>

          <h2>{{ t('三、付款', '3. Payment', '3. Thanh toán', '3. Оплата') }}</h2>
          <p>{{ t('常规订单采用电汇（T/T）付款：定金 30%，发货前付清余款。信用证（L/C）适用于大额订单，需在报价时确认条款。银行手续费由买方承担。', 'Standard orders are settled by telegraphic transfer (T/T): 30% deposit with the balance due before shipment. Letters of credit (L/C) are available for large orders, subject to terms agreed at quotation. Bank charges are borne by the buyer.', 'Đơn hàng tiêu chuẩn thanh toán bằng chuyển khoản (T/T): đặt cọc 30%, thanh toán phần còn lại trước khi giao hàng. Thư tín dụng (L/C) áp dụng cho đơn lớn, theo điều khoản thống nhất khi báo giá. Phí ngân hàng do bên mua chịu.', 'Стандартные заказы оплачиваются телеграфным переводом (T/T): аванс 30%, остаток — до отгрузки. Аккредитивы (L/C) применяются к крупным заказам на условиях, согласованных при выдаче предложения. Банковские расходы несёт покупатель.') }}</p>

          <h2>{{ t('四、交货与验收', '4. Delivery and acceptance', '4. Giao hàng và nghiệm thu', '4. Поставка и приёмка') }}</h2>
          <ul>
            <li>{{ t('设备以海运或空运方式交付，风险在装运港转移至买方，具体以合同条款为准。', 'Equipment is delivered by sea or air freight; risk passes to the buyer at the port of loading, as set out in the contract.', 'Thiết bị được giao bằng đường biển hoặc đường không, rủi ro chuyển sang người mua tại cảng đi, theo hợp đồng.', 'Оборудование отгружается морем или авиацией; риск переходит к покупателю в порту отгрузки согласно договору.') }}</li>
            <li>{{ t('设备出厂前经通电试机与功能检验。客户应在到货后按安装说明完成安装调试，并及时反馈问题。', 'Each machine is powered up and function-tested before shipment. Customers should install and commission the machine per the manual and report any issues promptly.', 'Mỗi máy được chạy thử điện và kiểm tra chức năng trước khi giao. Khách hàng lắp đặt và vận hành theo hướng dẫn, phản hồi kịp thời nếu có vấn đề.', 'Каждая машина проверяется под напряжением до отгрузки. Покупатель выполняет монтаж и пусконаладку согласно руководству и незамедлительно сообщает о проблемах.') }}</li>
            <li>{{ t('货物的所有权在买方付清全款前归我们所有。', 'Title to the goods remains with us until the buyer has paid in full.', 'Quyền sở hữu hàng hóa thuộc về chúng tôi cho đến khi bên mua thanh toán đầy đủ.', 'Право собственности на товар сохраняется за нами до полной оплаты покупателем.') }}</li>
          </ul>

          <h2>{{ t('五、质保与售后', '5. Warranty and after-sales service', '5. Bảo hành và hậu mãi', '5. Гарантия и послепродажное обслуживание') }}</h2>
          <ul>
            <li>{{ t('整机质保期为发货后 12 个月，液压系统部件为 18 个月，电控部件为 12 个月。易损件（密封圈、过滤芯、刀具等）不在质保范围内。', 'The whole machine is warranted for 12 months from shipment, hydraulic system parts for 18 months and electrical parts for 12 months. Wear items (seals, filters, blades and the like) are excluded.', 'Toàn máy được bảo hành 12 tháng kể từ khi giao, bộ phận thủy lực 18 tháng, bộ phận điện 12 tháng. Linh kiện hao mòn (phớp, lọc, dao…) không thuộc bảo hành.', 'На всю машину — 12 месяцев с даты отгрузки, на гидравлическую систему — 18 месяцев, на электрику — 12 месяцев. Расходные материалы (уплотнения, фильтры, пилы) гарантией не покрываются.') }}</li>
            <li>{{ t('质保范围外的服务（包括拆装、搬迁、改造、远程指导）按工时或服务费另行报价。', 'Out-of-warranty services (dismantling, relocation, modification, remote guidance) are quoted separately by labour or service fee.', 'Dịch vụ ngoài bảo hành (tháo lắp, di chuyển, cải tiến, hướng dẫn từ xa) được báo giá riêng theo công lao động hoặc phí dịch vụ.', 'Работы вне гарантии (демонтаж, перенос, модернизация, удалённые консультации) оплачиваются отдельно по ставке или за сервис.') }}</li>
            <li>{{ t('我们长期供应易损配件，并可按图纸或实物样件制造已停产机型的配件。', 'We supply wear parts for the long term and can manufacture replacements for discontinued models from drawings or physical samples.', 'Chúng tôi cung cấp linh kiện hao mòn lâu dài và có thể sản xuất lại theo bản vẽ hoặc mẫu thực tế cho các mã đã ngừng.', 'Мы долгое время поставляем расходники и изготавливаем замену для снятых с производства моделей по чертежам или образцам.') }}</li>
          </ul>

          <h2>{{ t('六、知识产权', '6. Intellectual property', '6. Quyền sở hữu trí tuệ', '6. Интеллектуальная собственность') }}</h2>
          <p>{{ t('本网站上的文字、图片、徽标、图纸与视频的著作权归佛山市顺德区上锐机械有限公司所有。未经书面许可，不得复制、改编或用于商业用途。第三方商标归各自所有者所有。', 'All text, images, logos, drawings and video on this site are the copyright of Foshan Shunde Shangrui Machinery Co., Ltd. No reproduction, adaptation or commercial use is permitted without written consent. Third-party trademarks belong to their respective owners.', 'Toàn bộ văn bản, hình ảnh, logo, bản vẽ và video trên website thuộc bản quyền của Công ty TNHH Máy móc Shang Rui, Quận Shunde, Triều Châu. Không được sao chép, chỉnh sửa hoặc dùng thương mại khi chưa có văn bản cho phép. Nhãn hiệu của bên thứ ba thuộc về chủ sở hữu tương ứng.', 'Все тексты, изображения, логотипы, чертежи и видео на сайте принадлежат Foshan Shunde Shangrui Machinery Co., Ltd. Воспроизведение, адаптация и коммерческое использование без письменного согласия запрещены. Товарные знаки третьих лиц принадлежат их владельцам.') }}</p>

          <h2>{{ t('七、责任限制', '7. Limitation of liability', '7. Giới hạn trách nhiệm', '7. Ограничение ответственности') }}</h2>
          <p>{{ t('在适用法律允许的最大范围内，我们不对因使用或无法使用本网站而造成的间接损失、利润损失或数据损失承担责任。本网站按现状提供，我们不作任何明示或默示的适销性或特定用途适用性担保。', 'To the maximum extent permitted by applicable law, we are not liable for any indirect loss, loss of profit or loss of data arising from your use of, or inability to use, this website. The site is provided on an "as is" basis without warranties of merchantability or fitness for a particular purpose.', 'Trong phạm vi tối đa pháp luật cho phép, chúng tôi không chịu trách nhiệm với bất kỳ thiệt hại gián tiếp, lợi nhuận hay dữ liệu nào phát sinh từ việc sử dụng hoặc không thể sử dụng website. Trang được cung cấp nguyên trạng, không kèm bảo đảm về khả năng thương mại hoặc phù hợp mục đích cụ thể.', 'В максимально допустимом применимым законодательством объёме мы не несём ответственности за косвенные убытки, упущенную прибыль или потерю данных вследствие использования или невозможности использования сайта. Сайт предоставляется «как есть» без гарантий товарной пригодности или пригодности для конкретной цели.') }}</p>

          <h2>{{ t('八、适用法律', '8. Governing law', '8. Luật áp dụng', '8. Применимое право') }}</h2>
          <p>{{ t('本条款受中华人民共和国法律管辖。发生争议时，双方应首先友好协商；协商不成的，提交上锐机械主要经营地有管辖权的人民法院处理。', 'These terms are governed by the laws of the People\'s Republic of China. Any dispute shall first be resolved through friendly negotiation; failing that, it shall be submitted to the People\'s Court having jurisdiction at our principal place of business.', 'Các điều khoản này được điều chỉnh theo luật pháp nước Cộng hòa Nhân dân Trung Quốc. Tranh chấp sẽ được giải quyết thương lượng trước; nếu không thành công, sẽ do Tòa án Nhân dân có thẩm quyền tại nơi đăng ký kinh doanh chính của chúng tôi xét xử.', 'Настоящие условия регулируются законодательством Китайской Народной Республики. Споры подлежат разрешению путём переговоров, а при недостижении согласия — в Народном суде по месту нахождения нашего основного производства.') }}</p>

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
