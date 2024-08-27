const services = [
{    serviceId: "1", title: 'إذن إنتاج و تصدير مواد إتفاقية حظر الأسلحة الكيميائية', description: 'يمكن للمستثمر الصناعي من خلال هذه الخدمة طلب إصدار إذن إنتاج/تصدير للمواد الكيميائية المدرجة ضمن إتفاقية حظر الاسلحة الكيميائية', category: 'الفسوحات الكيمائية', detail: "تُصدر الوزارة الترخيص للمصنع ساري لمدة ثلاث سنوات قابلة للتجديد بعد استكمال جميع البيانات والمستندات والانتهاء من دراسة طلب الترخيص للمشروع الصناعي من الناحية الفنية والاقتصادية والتأكد من استكمال الشروط، ويمثل الترخيص الصناعي موافقة بتنفيذ المشروع الصناعي. ويقوم المستثمر باستخدام الترخيص ذاته طوال فترة سريانه للبدء بالتشغيل والإنتاج بشرط تحقيق الشروط والمعايير واتباع الإجراءات الخاصة بذلك.", serviceLink: "/Service/1" },
{    serviceId: "2",title: 'اذن استيراد مواد كيميائية مقيدة', description: 'يمكن للمستثمر الصناعي من خلال هذه الخدمة طلب إصدار إذن استيراد مواد كيميائية مقيدة واللازمة لعمليات الإنتاج ضمن المنشأة الصناعية', category: 'الفسوحات الكيمائية', detail: "تُصدر الوزارة الترخيص للمصنع ساري لمدة ثلاث سنوات قابلة للتجديد بعد استكمال جميع البيانات والمستندات والانتهاء من دراسة طلب الترخيص للمشروع الصناعي من الناحية الفنية والاقتصادية والتأكد من استكمال الشروط، ويمثل الترخيص الصناعي موافقة بتنفيذ المشروع الصناعي. ويقوم المستثمر باستخدام الترخيص ذاته طوال فترة سريانه للبدء بالتشغيل والإنتاج بشرط تحقيق الشروط والمعايير واتباع الإجراءات الخاصة بذلك." , serviceLink: "/Service/2"},
{    serviceId: "3",title: 'طلب تأييد عمالة', description: 'تمكن الخدمة المستثمر الحصول على تأييد العمالة حسب احتياجات المنشاة الصناعية من القوى العاملة وذلك بعد زيارة المنشاة الصناعية وتقييم احتياج ', category: 'تأييد عمالة', detail: "تُصدر الوزارة الترخيص للمصنع ساري لمدة ثلاث سنوات قابلة للتجديد بعد استكمال جميع البيانات والمستندات والانتهاء من دراسة طلب الترخيص للمشروع الصناعي من الناحية الفنية والاقتصادية والتأكد من استكمال الشروط، ويمثل الترخيص الصناعي موافقة بتنفيذ المشروع الصناعي. ويقوم المستثمر باستخدام الترخيص ذاته طوال فترة سريانه للبدء بالتشغيل والإنتاج بشرط تحقيق الشروط والمعايير واتباع الإجراءات الخاصة بذلك."  , serviceLink: "/Service/3"},
{    serviceId: "4", title: 'تجديد الترخيص', description: 'يمكن للمستثمر الصناعي من خلال هذه الخدمة طلب إصدار إذن إنتاج/تصدير للمواد الكيميائية المدرجة ضمن إتفاقية حظر الاسلحة الكيميائية', category: 'التراخيص', detail: "تُصدر الوزارة الترخيص للمصنع ساري لمدة ثلاث سنوات قابلة للتجديد بعد استكمال جميع البيانات والمستندات والانتهاء من دراسة طلب الترخيص للمشروع الصناعي من الناحية الفنية والاقتصادية والتأكد من استكمال الشروط، ويمثل الترخيص الصناعي موافقة بتنفيذ المشروع الصناعي. ويقوم المستثمر باستخدام الترخيص ذاته طوال فترة سريانه للبدء بالتشغيل والإنتاج بشرط تحقيق الشروط والمعايير واتباع الإجراءات الخاصة بذلك." , serviceLink: "/Service/4"},
{    serviceId: "5", title: 'اعفاء جمركي مواد', description: 'يمكن للمستثمر الصناعي من خلال هذه الخدمة طلب إصدار إذن إنتاج/تصدير للمواد الكيميائية المدرجة ضمن إتفاقية حظر الاسلحة الكيميائية', category: 'اعفاء جمركي', detail: "تُصدر الوزارة الترخيص للمصنع ساري لمدة ثلاث سنوات قابلة للتجديد بعد استكمال جميع البيانات والمستندات والانتهاء من دراسة طلب الترخيص للمشروع الصناعي من الناحية الفنية والاقتصادية والتأكد من استكمال الشروط، ويمثل الترخيص الصناعي موافقة بتنفيذ المشروع الصناعي. ويقوم المستثمر باستخدام الترخيص ذاته طوال فترة سريانه للبدء بالتشغيل والإنتاج بشرط تحقيق الشروط والمعايير واتباع الإجراءات الخاصة بذلك." , serviceLink: "/Service/5"},
{    serviceId: "6", title: 'إلغاء الترخيص', description: 'تمكن الخدمة المستثمر الصناعي من الغاء الترخيص الصناعي', category: 'التراخيص', detail: "تُصدر الوزارة الترخيص للمصنع ساري لمدة ثلاث سنوات قابلة للتجديد بعد استكمال جميع البيانات والمستندات والانتهاء من دراسة طلب الترخيص للمشروع الصناعي من الناحية الفنية والاقتصادية والتأكد من استكمال الشروط، ويمثل الترخيص الصناعي موافقة بتنفيذ المشروع الصناعي. ويقوم المستثمر باستخدام الترخيص ذاته طوال فترة سريانه للبدء بالتشغيل والإنتاج بشرط تحقيق الشروط والمعايير واتباع الإجراءات الخاصة بذلك.", serviceLink: "/Service/6" },
{    serviceId: "7",title: 'نقل الملكية', description: 'خدمة الكترونية تمكن المالك الجديد للمنشأة الصناعية من تقديم طلب لنقل ملكية المصنع في منصة صناعي', category: 'تأييد عمالة', detail: "تُصدر الوزارة الترخيص للمصنع ساري لمدة ثلاث سنوات قابلة للتجديد بعد استكمال جميع البيانات والمستندات والانتهاء من دراسة طلب الترخيص للمشروع الصناعي من الناحية الفنية والاقتصادية والتأكد من استكمال الشروط، ويمثل الترخيص الصناعي موافقة بتنفيذ المشروع الصناعي. ويقوم المستثمر باستخدام الترخيص ذاته طوال فترة سريانه للبدء بالتشغيل والإنتاج بشرط تحقيق الشروط والمعايير واتباع الإجراءات الخاصة بذلك.", serviceLink: "/Service/7"  },
{    serviceId: "8",title: 'تغيير نوع الاستثمار', description: 'هي خدمة الكترونية تمكن المستثمر الصناعي من تقديم طلب تغيير نوع استثمار الترخيص الصناعي', category: 'التراخيص', detail: "تُصدر الوزارة الترخيص للمصنع ساري لمدة ثلاث سنوات قابلة للتجديد بعد استكمال جميع البيانات والمستندات والانتهاء من دراسة طلب الترخيص للمشروع الصناعي من الناحية الفنية والاقتصادية والتأكد من استكمال الشروط، ويمثل الترخيص الصناعي موافقة بتنفيذ المشروع الصناعي. ويقوم المستثمر باستخدام الترخيص ذاته طوال فترة سريانه للبدء بالتشغيل والإنتاج بشرط تحقيق الشروط والمعايير واتباع الإجراءات الخاصة بذلك.", serviceLink: "/Service/8"  },
{    serviceId: "9", title: 'اعفاء جمركي معدات وقطع غيار', description: 'الحصول على اعفاء جمركي لقطع الغيار والمعدات بعد الحصول على الترخيص الصناعي', category: 'اعفاء جمركي', detail: "تُصدر الوزارة الترخيص للمصنع ساري لمدة ثلاث سنوات قابلة للتجديد بعد استكمال جميع البيانات والمستندات والانتهاء من دراسة طلب الترخيص للمشروع الصناعي من الناحية الفنية والاقتصادية والتأكد من استكمال الشروط، ويمثل الترخيص الصناعي موافقة بتنفيذ المشروع الصناعي. ويقوم المستثمر باستخدام الترخيص ذاته طوال فترة سريانه للبدء بالتشغيل والإنتاج بشرط تحقيق الشروط والمعايير واتباع الإجراءات الخاصة بذلك.", serviceLink: "/Service/9" },
{    serviceId: "10",title: 'خدمة الاعلانات السنوية', description: 'خدمة تمكن المستثمر من اعلان يوضح المواد التي تم استيرادها وتصديرها من قبل المستثمر', category: 'الفسوحات الكيمائية', detail: "تُصدر الوزارة الترخيص للمصنع ساري لمدة ثلاث سنوات قابلة للتجديد بعد استكمال جميع البيانات والمستندات والانتهاء من دراسة طلب الترخيص للمشروع الصناعي من الناحية الفنية والاقتصادية والتأكد من استكمال الشروط، ويمثل الترخيص الصناعي موافقة بتنفيذ المشروع الصناعي. ويقوم المستثمر باستخدام الترخيص ذاته طوال فترة سريانه للبدء بالتشغيل والإنتاج بشرط تحقيق الشروط والمعايير واتباع الإجراءات الخاصة بذلك." , serviceLink: "/Service/10"},
{    serviceId: "11", title: 'تعديل الترخيص', description: 'الخدمة تمكن المستثمر الصناعي من تعديل الترخيص الصناعي', category: 'التراخيص', detail: "تُصدر الوزارة الترخيص للمصنع ساري لمدة ثلاث سنوات قابلة للتجديد بعد استكمال جميع البيانات والمستندات والانتهاء من دراسة طلب الترخيص للمشروع الصناعي من الناحية الفنية والاقتصادية والتأكد من استكمال الشروط، ويمثل الترخيص الصناعي موافقة بتنفيذ المشروع الصناعي. ويقوم المستثمر باستخدام الترخيص ذاته طوال فترة سريانه للبدء بالتشغيل والإنتاج بشرط تحقيق الشروط والمعايير واتباع الإجراءات الخاصة بذلك." , serviceLink: "/Service/11"},
{    serviceId: "12", title: 'بنود التعرفة المقيدة', description: 'خدمة تمكن المستثمر من عرض البنود الجمركية المتعلقة بالترخيص الخاص به، وابداء رأيه بالتأييد او عدم التأييد', category: 'البنود المقيدة', detail: "تُصدر الوزارة الترخيص للمصنع ساري لمدة ثلاث سنوات قابلة للتجديد بعد استكمال جميع البيانات والمستندات والانتهاء من دراسة طلب الترخيص للمشروع الصناعي من الناحية الفنية والاقتصادية والتأكد من استكمال الشروط، ويمثل الترخيص الصناعي موافقة بتنفيذ المشروع الصناعي. ويقوم المستثمر باستخدام الترخيص ذاته طوال فترة سريانه للبدء بالتشغيل والإنتاج بشرط تحقيق الشروط والمعايير واتباع الإجراءات الخاصة بذلك." , serviceLink: "/Service/12"},
{    serviceId: "13",title: 'تقديم طلب بدل مغادرين', description: 'تمكن الخدمة المستثمر من تقديم طلب بدل عمالة على طلب تأييد عمالة سابق ليتمكن من استقطاب عمالة بدل العمالة المغادرة', category: 'تأييد عمالة', detail: "تُصدر الوزارة الترخيص للمصنع ساري لمدة ثلاث سنوات قابلة للتجديد بعد استكمال جميع البيانات والمستندات والانتهاء من دراسة طلب الترخيص للمشروع الصناعي من الناحية الفنية والاقتصادية والتأكد من استكمال الشروط، ويمثل الترخيص الصناعي موافقة بتنفيذ المشروع الصناعي. ويقوم المستثمر باستخدام الترخيص ذاته طوال فترة سريانه للبدء بالتشغيل والإنتاج بشرط تحقيق الشروط والمعايير واتباع الإجراءات الخاصة بذلك." , serviceLink: "/Service/13" },
{    serviceId: "14",title: 'التقديم على برنامج تنافسية القطاع الصناعي', description: 'التقديم على برنامج تنافسية القطاع الصناعي الذي يهدف إلى تعزيز تنافسية وكفاءة المنشآت الصناعية القائمة، وبناء قدرات مستدامة لها لدعم التحول', category: 'برنامج تنافسية القطاع الصناعي', detail: "تُصدر الوزارة الترخيص للمصنع ساري لمدة ثلاث سنوات قابلة للتجديد بعد استكمال جميع البيانات والمستندات والانتهاء من دراسة طلب الترخيص للمشروع الصناعي من الناحية الفنية والاقتصادية والتأكد من استكمال الشروط، ويمثل الترخيص الصناعي موافقة بتنفيذ المشروع الصناعي. ويقوم المستثمر باستخدام الترخيص ذاته طوال فترة سريانه للبدء بالتشغيل والإنتاج بشرط تحقيق الشروط والمعايير واتباع الإجراءات الخاصة بذلك."  , serviceLink: "/Service/14"},
{    serviceId: "15",title: 'تقديم طلب مواد الخام والبتروكيماويات المتعثرة ', description: 'تمكن الخدمة المستثمر من ايصال التحديات الذي يواجهها من ناحية توريد المواد الأولية من قبل المورد بما يخص منتجات البتروكيماويات', category: 'البتروكيماويات', detail: "تُصدر الوزارة الترخيص للمصنع ساري لمدة ثلاث سنوات قابلة للتجديد بعد استكمال جميع البيانات والمستندات والانتهاء من دراسة طلب الترخيص للمشروع الصناعي من الناحية الفنية والاقتصادية والتأكد من استكمال الشروط، ويمثل الترخيص الصناعي موافقة بتنفيذ المشروع الصناعي. ويقوم المستثمر باستخدام الترخيص ذاته طوال فترة سريانه للبدء بالتشغيل والإنتاج بشرط تحقيق الشروط والمعايير واتباع الإجراءات الخاصة بذلك." , serviceLink: "/Service/15" },
{    serviceId: "16", title: 'شهادة المنشأ', description: 'خدمة تمكن المصدرين والمصنعين المحليين من إصدار شهادة المنشأ ومتابعتها إلكترونياً دون الحاجة لمراجعة الوزارة حفاظاً للوقت والجهد.', category: 'شهادة المنشأ', detail: "تُصدر الوزارة الترخيص للمصنع ساري لمدة ثلاث سنوات قابلة للتجديد بعد استكمال جميع البيانات والمستندات والانتهاء من دراسة طلب الترخيص للمشروع الصناعي من الناحية الفنية والاقتصادية والتأكد من استكمال الشروط، ويمثل الترخيص الصناعي موافقة بتنفيذ المشروع الصناعي. ويقوم المستثمر باستخدام الترخيص ذاته طوال فترة سريانه للبدء بالتشغيل والإنتاج بشرط تحقيق الشروط والمعايير واتباع الإجراءات الخاصة بذلك.", serviceLink: "/Service/16"},
];
export default services;

