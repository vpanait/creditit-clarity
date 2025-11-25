/**
 * Helmet Meta Tags Verification Script
 * 
 * Run this in your browser console (F12) on any page to verify Helmet is working.
 * 
 * Usage:
 * 1. Open your page (e.g., /industries/logistics-trucking)
 * 2. Open DevTools (F12)
 * 3. Go to Console tab
 * 4. Copy and paste this entire script
 * 5. Press Enter
 */

(function verifyHelmet() {
  console.log('🔍 Verifying Helmet Meta Tags...\n');
  
  const results = {
    title: null,
    description: null,
    keywords: null,
    ogTitle: null,
    ogDescription: null,
    ogUrl: null,
    twitterTitle: null,
    twitterDescription: null,
    structuredData: null,
  };
  
  // Check title
  results.title = document.title;
  console.log('✅ Title:', results.title);
  
  // Check meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  results.description = metaDesc?.content || '❌ NOT FOUND';
  console.log(metaDesc ? '✅ Description:' : '❌ Description:', results.description);
  
  // Check keywords
  const metaKeywords = document.querySelector('meta[name="keywords"]');
  results.keywords = metaKeywords?.content || '❌ NOT FOUND';
  console.log(metaKeywords ? '✅ Keywords:' : '❌ Keywords:', results.keywords);
  
  // Check Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  results.ogTitle = ogTitle?.content || '❌ NOT FOUND';
  console.log(ogTitle ? '✅ OG Title:' : '❌ OG Title:', results.ogTitle);
  
  const ogDesc = document.querySelector('meta[property="og:description"]');
  results.ogDescription = ogDesc?.content || '❌ NOT FOUND';
  console.log(ogDesc ? '✅ OG Description:' : '❌ OG Description:', results.ogDescription);
  
  const ogUrl = document.querySelector('meta[property="og:url"]');
  results.ogUrl = ogUrl?.content || '❌ NOT FOUND';
  console.log(ogUrl ? '✅ OG URL:' : '❌ OG URL:', results.ogUrl);
  
  // Check Twitter tags
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  results.twitterTitle = twitterTitle?.content || '❌ NOT FOUND';
  console.log(twitterTitle ? '✅ Twitter Title:' : '❌ Twitter Title:', results.twitterTitle);
  
  const twitterDesc = document.querySelector('meta[name="twitter:description"]');
  results.twitterDescription = twitterDesc?.content || '❌ NOT FOUND';
  console.log(twitterDesc ? '✅ Twitter Description:' : '❌ Twitter Description:', results.twitterDescription);
  
  // Check structured data
  const structuredDataScript = document.querySelector('script[type="application/ld+json"]');
  if (structuredDataScript) {
    try {
      results.structuredData = JSON.parse(structuredDataScript.textContent);
      console.log('✅ Structured Data:', results.structuredData);
    } catch (e) {
      results.structuredData = '❌ INVALID JSON';
      console.log('❌ Structured Data: Invalid JSON');
    }
  } else {
    results.structuredData = '❌ NOT FOUND';
    console.log('❌ Structured Data: Not found');
  }
  
  // Summary
  console.log('\n📊 Summary:');
  const allFound = Object.values(results).every(v => v && !v.toString().includes('❌'));
  
  if (allFound) {
    console.log('✅ All meta tags are present and correct!');
  } else {
    console.log('⚠️  Some meta tags are missing. Check the output above.');
  }
  
  // Return results for further inspection
  return results;
})();

